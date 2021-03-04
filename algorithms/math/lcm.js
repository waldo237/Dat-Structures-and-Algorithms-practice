"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lcmArray = exports.lcm = void 0;
var gcd_1 = require("./gcd");
var lcm = function (num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    return (num1 * num2) / gcd_1.gcd(num1, num2);
};
exports.lcm = lcm;
var lcmArray = function (num) {
    var result = num[0];
    for (var i = 1; i < num.length; i++) {
        result = num[i] * result / gcd_1.gcd(num[i], result);
    }
    return result;
};
exports.lcmArray = lcmArray;
