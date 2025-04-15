import random
m = random.randint(1,100)
a = -1
guess = 1
while(a!=m):
    guess += 1
    a = int(input("Guess the number :"))
    if(a>m):
      print("Please enter lower number ")
    else:
      print("Please enter higher number")
print(f"You have guess the right number {m} correctly in {guess} guesses. ")
