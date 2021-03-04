"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
var util_1 = require("../../util");
var quicksort_1 = require("../sorting/quicksort");
function binarySearchRecursive(array, value, low, high, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    if (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var element = array[mid];
        if (compareFn(element, value) === util_1.Compare.LESS_THAN) {
            return binarySearchRecursive(array, value, mid + 1, high, compareFn);
        }
        else if (compareFn(element, value) === util_1.Compare.BIGGER_THAN) {
            return binarySearchRecursive(array, value, low, mid - 1, compareFn);
        }
        else {
            return mid;
        }
    }
    return util_1.DOES_NOT_EXIST;
}
function binarySearch(array, value, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    var sortedArray = quicksort_1.quickSort(array);
    var low = 0;
    var high = sortedArray.length - 1;
    return binarySearchRecursive(array, value, low, high, compareFn);
}
exports.binarySearch = binarySearch;
