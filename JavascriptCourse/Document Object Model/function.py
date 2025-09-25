import math

function = input("Enter your function of x (f(x)):\n")

for y in range(50,-51,-1):
    for x in range(-50, 51, 0.5):
        if y == eval(function):
            print("o", end="")
        elif x == 0 and y == 0:
            print("+", end="")
        elif y == 0:
            print("-", end="")
        elif x == 0:
            print("|", end="")
        else:
            print(" ", end="")
    print()