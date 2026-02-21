Name = input("Enter your name: ")
print("Welcome,"+ Name ," to the choose your own path game.")
start =input("Enter 'start' to begin your adventure: ")
if start.lower() == "start":
    print("You wake up on a cold forest floor. " \
    "Tall black trees surround you, their branches twisting like fingers in the fog.Your head aches, and you can’t remember how you got here." \
    "In your pocket, you find a rusted compass. It spins wildly, except when it points north." \
    "A distant sound echoes through the trees — it could be running water, or it could be something moving." \
    "where do you want to go?")
    choice1 =input("North or south? : ")
    if choice1.lower() == "north":
        print("You follow the compass until the trees thin out. Ahead, you see a stone tower, cracked and ancient. The door is slightly open." \
    "Suddenly, you hear footsteps behind you.")
        choice2=input("Do you: 1. Enter the tower 2. Hide behind the trees : ")
        if choice2 =="1":
            print("Inside, the door slams shut. A glowing symbol appears on the wall. The compass in your pocket stops spinning" \
                  "A voice whispers:Only those who seek truth may leave."\
                    "You feel a warmth spread through you as the symbol glows brighter. The tower begins to fade, and you find yourself outside the forest, safe and free.")
        elif choice2 =="2":
            print("The footsteps grow louder. A shadow passes by… then another."\
                    "You hold your breath, but the forest seems to breathe with you." \
                    "ENDING: The shadows find you. The forest claims another soul." )
        else :
            print("Invalid choice. Game over.")
    elif choice1.lower() == "south":
        print("You push through thick bushes and arrive at a river glowing faintly blue. The water hums softly."\
              "On the riverbank lies a silver key.")
        choice3 = input("Do you: 1.Take the key 2.Drink the water: ")
        if choice3 == "1":
            print("The moment you grab it, the river stops humming. The trees part, revealing a hidden gate."\
                  "The key fits perfectly."\
                  "ENDING: You step through the gate and return home, carrying the key — proof the forest was real.")
        elif choice3 == "2":
            print("The water is icy cold. Your vision blurs, and the forest stretches endlessly."\
                  "You feel light… then empty."\
                  "ENDING: You become part of the Whispering Forest, calling others to it.")
        else :
            print("Invalid choice. Game over.")
            exit()
else:
    print("Maybe next time! Goodbye.")
    exit()