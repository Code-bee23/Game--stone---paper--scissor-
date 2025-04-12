import random
computer = random.choice([-1,0,1])
you = int(input("Enter your choice(from 1,0,-1) :"))
youDict = {"STONE":1 , "PAPER":-1 ,"SCISSOR":0}

reverseDict = { 1 : "STONE", -1: "PAPER" , 0 :"SCISSOR"}
print(f"You choose {reverseDict[you]}\n Computer choose {reverseDict[computer]}")

if(computer == -1  and you == -1):
    print("It's a draw")
elif(computer == -1 and you == 0):
    print("You win!")
elif(computer == -1 and you == 1):
    print("You loose!")

elif(computer == 1 and you == 1):
    print("It's draw!")
elif(computer == 1 and you == 0):
    print("You loose!")
elif(computer == 1 and you == -1):
    print("You win!")

elif(computer == 0 and you == 0):
    print("It's draw!")
elif(computer == 0 and you == 1):
    print("You win!")
elif(computer == 0 and you == -1):
    print("You loose!")

else:
    print("Something went wrong")
