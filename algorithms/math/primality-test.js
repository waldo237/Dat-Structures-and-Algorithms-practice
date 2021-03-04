"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime2 = exports.testPrime = exports.isPrime = void 0;
var isPrime = function (n) {
    if (n <= 1) {
        return false;
    }
    var sqrt = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
exports.isPrime = isPrime;
var testPrime = function (n) {
    if (n <= 1) {
        return false;
    }
    else {
        if (n === 2 || n === 3) {
            return true;
        }
        else if (n % 2 === 0) {
            return false;
        }
        else {
            var sqrt = Math.floor(Math.sqrt(n));
            for (var i = 3; i <= sqrt; i += 2) {
                if (n % i === 0) {
                    return false;
                }
            }
        }
    }
    return true;
};
exports.testPrime = testPrime;
// tslint:disable-next-line:max-line-length
var isPrime2 = function (n) { return (n >= 2) ? (!__spread(Array(n).keys()).slice(2).map(function (i) { return !(n % i); }).includes(true) && ![0, 1].includes(n)) : false; };
exports.isPrime2 = isPrime2;
