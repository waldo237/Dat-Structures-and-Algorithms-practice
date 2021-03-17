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
function merge(left, right) {
    var sorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        }
        else {
            sorted.push(right.shift());
        }
    }
    return sorted.concat.apply(sorted, __spread(left, right));
}
function mergeSort(array) {
    var length = array.length;
    if (length <= 1)
        return array;
    var middle = Math.floor(length / 2);
    var left = mergeSort(array.slice(0, middle));
    var right = mergeSort(array.slice(middle, length));
    return merge(left, right);
}
var array1 = [5, 43, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 25, 63, 52];
console.log(mergeSort(array1));
