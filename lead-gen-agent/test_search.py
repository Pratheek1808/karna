from ddgs import DDGS
import json

print("Testing DuckDuckGo Search...")

try:
    with DDGS() as ddgs:
        results = [r for r in ddgs.text("coffee shops in Seattle", max_results=5)]
        print(f"Found {len(results)} results.")
        print(json.dumps(results, indent=2))
except Exception as e:
    print(f"Error: {e}")
