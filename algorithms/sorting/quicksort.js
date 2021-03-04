"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
var util_1 = require("../../util");
var partition = function (array, left, right, compareFn) {
    var pivot = array[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;
    // console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right);
    while (i <= j) {
        while (compareFn(array[i], pivot) === util_1.Compare.LESS_THAN) {
            i++;
            // console.log('i = ' + i);
        }
        while (compareFn(array[j], pivot) === util_1.Compare.BIGGER_THAN) {
            j--;
            // console.log('j = ' + j);
        }
        if (i <= j) {
            // console.log('swap ' + array[i] + ' with ' + array[j]);
            util_1.swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
};
var quick = function (array, left, right, compareFn) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right, compareFn);
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn);
        }
        if (index < right) {
            quick(array, index, right, compareFn);
        }
    }
    return array;
};
var quickSort = function (array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    return quick(array, 0, array.length - 1, compareFn);
};
exports.quickSort = quickSort;
