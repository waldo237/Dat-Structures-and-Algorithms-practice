
const { partition } = require('./quickSort');
function quickSlectInPlace(a, l, h, k) {
    let p = partition(a, l, h);
    
    if (p == (k - 1)) {
        return a[p];
    } else if (p > (k - 1)) {
        return quickSlectInPlace(a, l, p - 1, k);
    } else {
        return quickSlectInPlace(a, p + 1, h, k);
    }
}

function mediaQuickSelect(array){
    return quickSlectInPlace(arra, 0, array.length-1,Math.floor(array/2));
}

const array = [1,3,3,-2,3,14,7,8,1,2,2, 454, 43, 23,36];
console.log(quickSlectInPlace(array,0,array.length-1,3));