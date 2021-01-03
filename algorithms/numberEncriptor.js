const {isPrime} = require('./primes');

function modInverse(e, phi) {
    let m0 = phi, t, q;
    let x0 = 0, x1 = 1;

    if (phi == 1) {
        return 0;
    }
    while (e > 1) {
        q = Math.floor(e / phi);
        t = phi;
        phi = e % phi
        e = t;
        t = x0;
        x0 = x1 -q * x0;
        x1 = t;
    }

    if(x1 < 0){
        x1 += m0;
        return x1;
    }
}

console.log(modInverse(7,40));


function RSAKeyPair(p,q){
    // check if they are prime;
    if(!(isPrime(p) && isPrime(q)) ) return;
    if(p == q) return;
    const n = p* q, phi = (p-1)* (q-1), e = 3, d = modInverse(e, phi);
    

    // publick key: [[e, n],  [d, n]]
    return [[e, n],  [d, n]];

}

console.log(RSAKeyPair(5, 11));