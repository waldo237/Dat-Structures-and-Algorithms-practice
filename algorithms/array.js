/* 
Problem: Given the array arr, find and return two indices of the array that add up to weight
or return -1 if there is no combination that adds up to weight.
For example, in an array like [1,2,3,4,5], what numbers add up to 9?
*/
// O(n2)
function findSum(arr, weight) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == weight) {
                return [i, j];
            }
        }
    }
    return -1;
}


// O(n)
function findSumImproved(arr, weight) {
    let hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        let currentElem = arr[i],
            difference = weight - currentElem;
        if (hashTable[currentElem] != undefined) {
            return [i, hashTable[weight - currentElem]]
        } else {
            hashTable[difference] = i;
        }
    }
    return -1;
}

// FIND THE MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE

function medianOfArray(array) {
    let length = array.length;
    if (length % 2 == 1) {
        return array[Math.floor(length / 2)]
    } else {
        return (array[length / 2]) + array[length / 2 - 1] / 2;
    }
}


// O(log2(n))
function medianOfTwoSortedArrays(arr1, arr2, pos) {
    if (pos <= 0) {
        return -1;
    }
    if (pos == 2) {
        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
    }
    let median1 = medianOfArray(arr1), median2 = medianOfArray(arr2);
    if (median1 == median2) {
        return median1;
    }
    let evenOffset = pos % 2 == 0 ? 1 : 0,
        offsetMinus = Math.floor(pos / 2) - evenOffset,
        offsetPlus = Math.floor(pos / 2) + evenOffset;

    if (median1 < median2) {
        return medianOfTwoSortedArrays(arr1.slice(offsetMinus), arr2.slice(offsetMinus), offsetPlus);
    }else{

        return medianOfTwoSortedArrays(arr12.slice(offsetMinus), arr1.slice(offsetMinus), offsetPlus);
    }
}

/* 
Time Complexity: O(kn)
Space Complexity: O(n)
 */
function commonElements(karray){
    let hashMap = {},
    last,
    answer = [];

    for(let i =0; i< karray.length; i ++){
        const currentArray = karray [ i];
        last = null;
        for(let j = 0; j<currentArray.length; j++){
            const currentElem = currentArray[i];
            if(last!=currentElem){
                if(!hashMap[currentElem]){
                    hashMap[currentElem] = 1;
                }else{
                    hashMap[currentArray]++;
                }
            }
        }
        last = currentElem;
    }

    for(let prop in hashMap){
        if(hashMap[prop]== karray.length){
            answer.push(parseInt (prop));
        }
    }
    return answer;
}


// create a Matrix
function matrix(rows, columns){
    const jaggedArray = new Array (rows);
    for(let i =0; i< columns; i++){
        jaggedArray[i] = new Array(rows);
    }
    return jaggedArray;
}

console.log(matrix(8,8));