
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    print("Error: GEMINI_API_KEY not found in environment variables.")
else:
    print(f"API Key found: {api_key[:5]}...{api_key[-5:]}")
    try:
        genai.configure(api_key=api_key)
        
        print("Listing available models:")
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                print(m.name)
                
        model_name = 'gemini-1.5-flash'
        try:
            model = genai.GenerativeModel(model_name)
            response = model.generate_content("Hello")
            print(f"Success with {model_name}!")
        except Exception:
            print(f"Failed with {model_name}, trying 'gemini-flash-latest'...")
            model_name = 'gemini-flash-latest' # Corrected model name
            try:
                model = genai.GenerativeModel(model_name)
                response = model.generate_content("Hello")
                print(f"Success with {model_name}!")
            except Exception as e:
                 print(f"Failed with {model_name}: {e}, trying 'gemini-1.5-flash'...")
                 model_name = 'gemini-1.5-flash'
                 model = genai.GenerativeModel(model_name)
                 response = model.generate_content("Hello")
                 print(f"Success with {model_name}!")

        print("API response received:")
        print(response.text)
    except Exception as e:
        print(f"Error connecting to API: {e}")
