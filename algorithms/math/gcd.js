"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcdArray = exports.gcd = void 0;
var gcd = function (num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    if (num1 === num2) {
        return num1;
    }
    if (num1 > num2) {
        return exports.gcd(num1 - num2, num2);
    }
    return exports.gcd(num1, num2 - num1);
};
exports.gcd = gcd;
var gcdArray = function (num) {
    var result = num[0];
    for (var i = 1; i < num.length; i++) {
        result = exports.gcd(num[i], result);
    }
    return result;
};
exports.gcdArray = gcdArray;
