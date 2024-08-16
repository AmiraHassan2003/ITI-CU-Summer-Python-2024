    # Fill an array of 5 elements from user, sort it in descending and ascending orders.
elementsArray = []
for i in range(5):
    element = input("input the element #{i}: ")
    elementsArray.append(element)

elementsArray.sort(reverse=True)
print(f"Descending Orders {elementsArray}")

elementsArray.sort()
print(f"Ascending Orders {elementsArray}")


    # Write a program that counts up the number of vowels
searchVowels = "Hello My Name Is Amira"
vowels = "aieouAIEOU"
countsVowels = 0

for char in searchVowels:
    if char in vowels:
        countsVowels +=1
print(f"the number of vowels: {countsVowels}")


    # Write a program that prints the locations of "i"
searchForLocationsI = "Hi My Name is Amira"
print(searchForLocationsI.count('i'))
