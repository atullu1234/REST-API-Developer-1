def isprime(n):
    flag=0
    if n<=1:
        print("1 or 0 is invalid")
        quit(0)
    for i in range(2,n):
        if n%i==0:
            flag=1
    if flag==1:
        return True
    else:
        return False
print ("enter an integer number")
try:
    n=int(input())
except:
    print("please enter a valid input")
res=isprime(n)
if res==False:
    print(n," is prime")
else:
    print(n,"is not prime")
