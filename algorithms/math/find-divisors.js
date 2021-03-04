"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDivisors = void 0;
var findDivisors = function (num) {
    var divisors = [];
    var sqrt = Math.floor(Math.sqrt(num));
    for (var i = 1; i <= sqrt; i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== sqrt) {
                divisors.push(Math.floor(num / i));
            }
        }
    }
    if (num >= 2 && !divisors.includes(num)) {
        divisors.push(num);
    }
    divisors.sort(function (a, b) { return a - b; });
    return divisors;
};
exports.findDivisors = findDivisors;
