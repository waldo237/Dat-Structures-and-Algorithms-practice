from array import *


arr = array('i', [20, 3, 243, 12, 5, 4, 2, 42,2])

arr.append(4)
arr.insert(2, 1010)
newArr = [32, 12,2]
arr.fromlist(newArr)
arr.pop()
print(arr)
arr.reverse()
print(arr)
print(arr.buffer_info())
print(arr.count(2))
print('index is: ', arr.index(1010))
del arr[4]
print('accessed: ', arr[4]) 
del arr[4]
print('accessed: ', arr[4])
del arr[4]
print('accessed: ', arr[4])
print(sum(arr)/len(arr))