from duckduckgo_search import DDGS
import json
import time

queries = [
    "list of interior design firms in Chicago directory",
    "top rated Chicago interior designers Houzz"
]

print("Testing DuckDuckGo Search with specific queries...")

for q in queries:
    print(f"Searching: {q}")
    try:
        with DDGS() as ddgs:
            results = [r for r in ddgs.text(q, region='us-en', max_results=5)]
            print(f"Found {len(results)} results.")
    except Exception as e:
        print(f"Error: {e}")
    time.sleep(2)
