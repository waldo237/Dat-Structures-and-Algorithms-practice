#   Created by Elshad Karimov 
#   Copyright © AppMillers. All rights reserved.

# someRecursive Solution
import functools
def someRecursive(arr, cb):
    if len(arr) == 0:
        return False
    if not(cb(arr[0])):
        return someRecursive(arr[1:], cb)
    return True

def isOdd(num):
    if num%2==0:
        return False
    else:
        return True
print(list(map(isOdd, [4,6,8,9])))
print(True in list(map(isOdd, [4,6,8])))
print(someRecursive([1,2,3,4], isOdd)) # true
print(someRecursive([4,6,8,9], isOdd)) # true
print(someRecursive([4,6,8], isOdd)) # false
