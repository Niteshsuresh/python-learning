
def add(x, y): #"Adds two numbers"
 total = x+y	
 return total;	

def sub(x, y): #"sub two numbers"
 return x-y	

print("choose option")
print("1-Add")
print("2-Add")

choice = int(input("Enter the choice"));
num1 = int(input("Enter num1"));
num2 = int(input("Enter num2"));

if choice == 1:
 print("addition of ",num1," and",num2 ,"is", add(num1, num2))
elif choice == 2:
 print("substraction of ", num1, "and", num2, "is", sub(num1, num2))
else:
 print("Incorrect input")


