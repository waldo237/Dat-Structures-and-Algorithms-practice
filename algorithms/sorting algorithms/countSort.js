function countSort(array){
    let hash = {}, countArr = [];
    for(let i=0; i< array.length; i++){
        if(!hash[array[i]]){
            hash[array[i]] = 1;
        }else{
            hash[array[i]]++;
        }
    }

    for(let key in hash){
        for(let i=0; i<hash[key]; i++){
            countArr.push(parseInt(key));
        }
    }
    return countArr;
}

console.log(countSort([6,1,23,4,2,3]))


var array1 = [12,3,4,2,1,34,23];

function comparator(a, b){
    return b-a;
}

console.log(array1.sort(comparator));