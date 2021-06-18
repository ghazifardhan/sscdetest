# From 3 array samples, find pattern, create entries, manipulate into 2 levesl of arrays, and show indexes

arr = [78, 85, 95]
tempArray = []
i = 0

while (i < 11):
    if i > 2:
        totalArr = len(arr)
        nextNumb = 0
        if totalArr == 3:
            nextNumb = arr[i-1]
        else:
            tempArray.append(arr[totalArr - 4])
            nextNumb = arr[i-1] + sum(tempArray)
        arr.append(nextNumb)
    i = i+1

x = 0
sourceModXIndex = []
newGeneratedModXIndex = []
while x < len(arr):
    if arr[x] % 3 > 0:
        sourceModXIndex.append(x)

    if x > 2:
        if arr[x] % 3 > 0:
            newGeneratedModXIndex.append(x)
    x += 1

# Print new array
print(arr)

# Print index where mod x > 0 (source array and new generated array)
print(sourceModXIndex)
print(newGeneratedModXIndex)