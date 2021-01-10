function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort(arr){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j <= i; j++){
            if(arr[i] < arr[j]){
                swap(arr, i, j);
            }
        }
    }
    return arr;
}