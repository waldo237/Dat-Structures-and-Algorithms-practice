"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
var util_1 = require("../../util");
var selectionSort = function (array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    var length = array.length;
    var indexMin;
    for (var i = 0; i < length - 1; i++) {
        indexMin = i;
        // console.log('index ' + array[i]);
        for (var j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === util_1.Compare.BIGGER_THAN) {
                // console.log('new index min ' + array[j]);
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            // console.log('swap ' + array[i] + ' with ' + array[indexMin]);
            util_1.swap(array, i, indexMin);
        }
    }
    return array;
};
exports.selectionSort = selectionSort;
