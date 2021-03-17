"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
function merge(left, right) {
    var i = 0;
    var j = 0;
    var result = [];
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
function mergeSort(array) {
    if (array.length > 1) {
        var length_1 = array.length;
        var middle = Math.floor(length_1 / 2);
        var left = mergeSort(array.slice(0, middle));
        var right = mergeSort(array.slice(middle, length_1));
        array = merge(left, right);
    }
    return array;
}
exports.mergeSort = mergeSort;
