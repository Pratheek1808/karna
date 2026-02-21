import google.generativeai as genai
from ddgs import DDGS
import pandas as pd
import json
import time
from typing import List, Dict
import config

class LeadGenAgent:
    def __init__(self):
        self.api_key = config.GEMINI_API_KEY
        if not self.api_key:
            raise ValueError("GEMINI_API_KEY not found in environment variables. Please set it in a .env file.")
        
        genai.configure(api_key=self.api_key)
        self.model = genai.GenerativeModel('gemini-flash-latest')

    def parse_user_prompt(self, prompt: str) -> List[str]:
        """
        Uses LLM to understand what the user is looking for and generates specific search queries.
        """
        print("Thinking about search queries...")
        sys_prompt = f"""
        You are an expert lead generation assistant. 
        Your task is to take a user's request for business leads and convert it into 3-5 distinct, effective search engine queries.
        Focus on finding lists, directories, or specific business types.
        
        User Request: "{prompt}"
        
        Return ONLY a JSON array of strings. Example: ["search query 1", "search query 2"]
        """
        
        try:
            response = self.model.generate_content(sys_prompt)
            # Cleanup markdown code blocks if present
            text = response.text.strip()
            if text.startswith("```json"):
                text = text[7:-3]
            elif text.startswith("```"):
                text = text[3:-3]
            
            queries = json.loads(text)
            return queries
        except Exception as e:
            print(f"Error parsing prompt: {e}")
            return [prompt] # Fallback to original prompt

    def search_web(self, query: str, ddgs_instance) -> List[Dict]:
        """
        Searches the web using DuckDuckGo.
        """
        print(f"Searching for: {query}")
        results = []
        try:
            # DuckDuckGo text search
            ddg_results = ddgs_instance.text(query, region='us-en', max_results=config.SEARCH_LIMIT)
            for r in ddg_results:
                results.append({
                    "title": r.get('title'),
                    "link": r.get('href'),
                    "snippet": r.get('body')
                })
        except Exception as e:
            print(f"Search error for '{query}': {e}")
            # Rate limiting handling could go here
            time.sleep(2) 
        
        return results

    def analyze_leads(self, raw_leads: List[Dict]) -> List[Dict]:
        """
        Uses LLM to clean up and structure the lead data from search snippets.
        """
        print("Analyzing and structuring lead data...")
        
        # We process in batches to avoid token limits if list is huge
        structured_leads = []
        
        # Prepare input for LLM
        leads_text = json.dumps(raw_leads, indent=2)
        
        sys_prompt = f"""
        You are a data extraction expert.
        I will provide a list of raw search results (Title, Link, Snippet).
        Your job is to extract and format valid business leads from this.
        
        Ignore generic directory pages (like "Top 10..." articles) if they don't have specific business info, 
        UNLESS the snippet itself contains specific business details.
        
        For each relevant business found, extract:
        - Business Name
        - Website URL (from the link)
        - Description (brief)
        - Context (why this matched the search)
        
        Raw Data:
        {leads_text}
        
        Return ONLY a JSON array of objects.
        Schema:
        [
            {{
                "name": "Business Name",
                "website": "URL",
                "description": "...",
                "context": "..."
            }}
        ]
        """
        
        try:
            response = self.model.generate_content(sys_prompt)
             # Cleanup markdown
            text = response.text.strip()
            if text.startswith("```json"):
                text = text[7:-3]
            elif text.startswith("```"):
                text = text[3:-3]
                
            structured_leads = json.loads(text)
        except Exception as e:
            print(f"Error analyzing leads: {e}")
            
        return structured_leads

    def run(self, user_prompt: str):
        print(f"\n--- Starting Lead Gen for: {user_prompt} ---")
        
        # 1. Generate Queries
        queries = self.parse_user_prompt(user_prompt)
        print(f"Generated Queries: {queries}")
        
        all_raw_results = []
        
        # 2. Search
        with DDGS() as ddgs:
            for q in queries:
                results = self.search_web(q, ddgs)
                all_raw_results.extend(results)
                time.sleep(1) # Be polite
            
        print(f"Found {len(all_raw_results)} raw results.")
        
        # Deduplicate based on link
        seen_links = set()
        unique_results = []
        for r in all_raw_results:
            if r['link'] not in seen_links:
                seen_links.add(r['link'])
                unique_results.append(r)
        
        print(f"Processing {len(unique_results)} unique results...")
        
        # 3. Analyze & Extract
        # If too many results, maybe take top 20
        leads = self.analyze_leads(unique_results[:20])
        
        # 4. JSON/CSV Export will be handled by main or here
        return leads
