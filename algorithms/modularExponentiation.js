// O(n)
function modularExponentiation(base, exponent, modulus){
    if(modulus == 1) return 0;
    let value =1;
    for(let i=0; i< exponent; i++){
        value = (value *base) % modulus;
    }
    return value;
}