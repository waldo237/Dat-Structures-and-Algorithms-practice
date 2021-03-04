"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
var util_1 = require("../../util");
var insertionSort = function (array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    var length = array.length;
    var temp;
    for (var i = 1; i < length; i++) {
        var j = i;
        temp = array[i];
        // console.log('to be inserted ' + temp);
        while (j > 0 && compareFn(array[j - 1], temp) === util_1.Compare.BIGGER_THAN) {
            // console.log('shift ' + array[j - 1]);
            array[j] = array[j - 1];
            j--;
        }
        // console.log('insert ' + temp);
        array[j] = temp;
    }
    return array;
};
exports.insertionSort = insertionSort;
