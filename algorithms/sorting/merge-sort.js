"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
var util_1 = require("../../util");
function merge(left, right, compareFn) {
    var i = 0;
    var j = 0;
    var result = [];
    while (i < left.length && j < right.length) {
        result.push(compareFn(left[i], right[j]) === util_1.Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
function mergeSort(array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    if (array.length > 1) {
        var length_1 = array.length;
        var middle = Math.floor(length_1 / 2);
        var left = mergeSort(array.slice(0, middle), compareFn);
        var right = mergeSort(array.slice(middle, length_1), compareFn);
        array = merge(left, right, compareFn);
    }
    return array;
}
exports.mergeSort = mergeSort;
