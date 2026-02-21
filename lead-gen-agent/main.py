import os
import sys
import pandas as pd
from agent import LeadGenAgent
from dotenv import load_dotenv

def main():
    # Load env
    load_dotenv()
    
    # Check key
    if not os.getenv("GEMINI_API_KEY"):
        print("Error: GEMINI_API_KEY not set.")
        print("Please create a .env file with GEMINI_API_KEY=your_key_here")
        return

    print("Welcome to the AI Lead Generation Agent!")
    print("---------------------------------------")
    
    if len(sys.argv) > 1:
        prompt = " ".join(sys.argv[1:])
    else:
        prompt = input("Enter your lead generation requirement (e.g., 'Find plumbing companies in Miami'): ")
    
    if not prompt:
        print("No prompt provided. Exiting.")
        return

    try:
        agent = LeadGenAgent()
        leads = agent.run(prompt)
        
        print("\n--- Results ---")
        if not leads:
            print("No leads found.")
        else:
            df = pd.DataFrame(leads)
            # Save to CSV first to ensure data is safe
            safe_name = "".join([c for c in prompt if c.isalnum() or c in (' ', '-', '_')]).strip().replace(' ', '_')[:20]
            filename = f"leads_{safe_name}.csv"
            df.to_csv(filename, index=False, encoding='utf-8-sig') # utf-8-sig for Excel compatibility
            print(f"\nSaved results to {filename}")

            try:
                print(df.to_string(index=False))
            except UnicodeEncodeError:
                print("Results contain characters that cannot be displayed in this console. Please check the CSV file.")
            
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
