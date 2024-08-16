print("#################################################")
    #  divisor And Bound
def divisorAndBound(divisor,bound):
    return (int(bound/divisor)) * divisor 
print(f"The result of (divisor And Bound): {divisorAndBound(2,17)}")
print("#################################################")

             # Palindrome
def isPalindrome(palindrome):
    lengthPalindrome = len(palindrome)   #8
    countLeftSubstring = int(lengthPalindrome/2)  #4

    if lengthPalindrome % 2 == 0:
        countRightSubstring = countLeftSubstring    #4
    else:
        countRightSubstring = countLeftSubstring + 1 

    leftSubstring = palindrome[0:countLeftSubstring]   # abcd
    rightSubstring = palindrome[lengthPalindrome-1 : countRightSubstring -1 : -1] 

    if leftSubstring == rightSubstring:
        return True
    else:
        return False

print(f"IsPalindrome: {isPalindrome("abcdcba")}")
print("#################################################")



            # The Elements of List1 Followed by the elements of List2
def additionTwoLists(lst1, lst2):
    lst1.extend(lst2)
    return lst1

result = additionTwoLists([1,2,3,4] , ['a','b','c','d'])
print(f"additionTwoLists: {result}")
print("#################################################")

            # is boolean flag 
def isString(flag):
    return type(flag) == str

print(f"isString: {isString("abc")}")
print("#################################################")

            # Sorted Dictionary
def sortedDictionary(myDict):
    return dict(sorted(myDict.items()))

myDict = {'n': 'nada' , 'b': 'bassant' , 'd':'dina' , 'a':'amira'}
print(f"sortedDictionary{sortedDictionary(myDict)}")
print("#################################################")
