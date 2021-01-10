function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n){
            return true;
        }
    }
    return false;
}

function binarySearch(arr, n){
    let lowIndex =0, highIndex = arr.length -1;

    while(lowIndex <= highIndex){
        let midIndex = Math.floor((highIndex + lowIndex)/2);
        if(arr[midIndex]== n){
            return midIndex;
        }else if(arr[midIndex] < n){
            lowIndex = midIndex;
        }else{
            highIndex = midIndex;
        }
    }
    return -1;
}