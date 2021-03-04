"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
var util_1 = require("../../util");
var quicksort_1 = require("../sorting/quicksort");
function binarySearch(array, value, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    var sortedArray = quicksort_1.quickSort(array);
    var low = 0;
    var high = sortedArray.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var element = sortedArray[mid];
        // console.log('mid element is ' + element);
        if (compareFn(element, value) === util_1.Compare.LESS_THAN) {
            low = mid + 1;
            // console.log('low is ' + low);
        }
        else if (compareFn(element, value) === util_1.Compare.BIGGER_THAN) {
            high = mid - 1;
            // console.log('high is ' + high);
        }
        else {
            // console.log('found it');
            return mid;
        }
    }
    return util_1.DOES_NOT_EXIST;
}
exports.binarySearch = binarySearch;
