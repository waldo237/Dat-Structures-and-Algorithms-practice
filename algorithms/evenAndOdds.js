

const removeEven= (arr) =>{
    const odds = [];
    for(let number of arr){
        if(number % 2 != 0){
            odds.push(number)
        }
    }
    return odds;
}


const removeOdds =(arr) =>{
    const even = [];
    for(number of arr){
        if(number % 2 == 0){
            even.push(number);
        }
    }
    return even;
}

function removeOddsFunctional(arr){
    return arr.filter(n => (n % 2 === 0));
}

console.log(removeOddsFunctional([ 3,2, 34, 32, 1, 6, 7, 8, 4, 2, 5, 9]));