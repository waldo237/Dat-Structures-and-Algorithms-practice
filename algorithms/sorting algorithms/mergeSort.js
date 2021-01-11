function merge(leftA, rightA){
    let results=[], leftIndex = 0, rightIndex = 0;
    while(leftIndex < leftA.length && rightIndex < rightA.length){
        if(leftA[leftIndex] < rightA[rightIndex]){
            results.push(leftA[leftIndex++]);
        }else{
            results.push(rightA[rightIndex++])
        }
    }

    let leftRemains = leftA.slice(leftIndex), rightRemains = rightA.slice(rightIndex);
    return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array){
    if(array.length < 2){
        return array;
    }
    const midPoint = Math.floor((array.length)/2), 
    leftArray = array.slice(0, midPoint), 
    rightArray = array.slice(midPoint);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
console.log(mergeSort([6,1,23,4,2,3]))