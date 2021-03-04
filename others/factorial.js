"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = exports.factorialIterative = void 0;
function factorialIterative(number) {
    if (number < 0) {
        return undefined;
    }
    var total = 1;
    for (var n = number; n > 1; n--) {
        total *= n;
    }
    return total;
}
exports.factorialIterative = factorialIterative;
function factorial(n) {
    if (n < 0) {
        return undefined;
    }
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
exports.factorial = factorial;
