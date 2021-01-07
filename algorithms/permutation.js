function swap(strArr, index1, index2){
    let temp = strArr[index1];
    strArr[index1]= strArr[index2];
    strArr[index2] = temp;
}

function permutate(strArr, begin, end){
    if(begin == end){
        console.log(strArr);
     } else{
        for(let i=begin; i <end+1; i++){
            swap(strArr, begin, i);
            permutate(strArr, begin+1, end);
            swap(strArr, begin, i);
        }
    }
    
}

function permutateArray(strArr){
    permutate(strArr, 0, strArr.length -1);
}
permutateArray(["uno", "dos", "tres"]);