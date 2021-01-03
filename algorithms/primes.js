

// o(n)
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
// o(sqrt(n))
const isPrime2= (n)=> {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;


    for (let i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

// O(sqrt(n))
function primeFactors(n) {
    while (n % 2 == 0) {
        console.log(2);
        n = n / 2;
    }
    // n must be odd at this point. So we can skip one element
    for (let i = 3; i * i <= n; i = i + 2) {
        // while i divides n, print i and divide n

        while (n % i == 0) {
            console.log(i);
            n = n / i;
        }
    }
    // This condition is to handle the case when n is a prime number 17 // greater than 2
    if (n > 2) {
        console.log(n);
    }
}
// O( sqrt ( n ))
function allPrimesLessThanN(n) {
    for (let i = 0; i < n; i++) {
        if (isPrime2(i)) {
            
        }
    }
}



function maxDivide(number, divisor) {
    while (number % divisor == 0) {
        number /= divisor;
    }
    return number;
}
// O(log2( n ))
function isUgly(number) {
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);
    return number === 1;
}
//O( n (log2( n )))
function arrayNUglyNumbers(n) {
    let counter = 0, currentNumber = 1, uglyNumbers = [];
    while (counter != n) {
        if (isUgly(currentNumber)) {
            counter++;
            uglyNumbers.push(currentNumber);
        }
        currentNumber++;
    }
    return uglyNumbers;
}

allPrimesLessThanN(50);
// console.log('isPrime2', isPrime2(20));
// console.log('isPrime', isPrime(20));

function numberEquals(x, y) { 
    return Math.abs(x - y) < Number.EPSILON;
 }
// console.log('comparing decimals: ',numberEquals(0.1 + 0.2, 0.3));


exports.isPrime = isPrime2;