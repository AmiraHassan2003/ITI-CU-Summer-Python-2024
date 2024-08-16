# •Given an array of strings, return another array containing all of its longest strings.
def longestString(arrayString):
    counter = 0
    returnString = []
    for i in arrayString:
        if counter < len(i):
            counter = len(i)
    
    for i in arrayString:
        if counter == len(i):
            returnString.append(i)
    
    return returnString

inputArray = ["aba", "aa", "ad", "vcd", "aba"]
print(f"(inputArray): {longestString(inputArray)}")

# •You have k apple boxes full of apples. Each square box of size m contains m × m apples. 
def countYellowRed(apples):
    yellow = 0
    red = 0
    for i in range(1,apples+1):
        if i % 2 == 0:
            red = red + (i*i)
        else :
            yellow = yellow + (i*i)
    return (red - yellow)  

print(countYellowRed(5))    

# •you are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.
def solution(startTag):
    import re
    match = re.match(r'<(\w+)', startTag)
    
    if match:
        tag_name = match.group(1)
        end_tag = f"</{tag_name}>"
        return end_tag
    else:
        return None

print(solution("<button>"))
print(solution("<i>"))









