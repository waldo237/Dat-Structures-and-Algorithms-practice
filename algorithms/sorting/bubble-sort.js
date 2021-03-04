"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
var util_1 = require("../../util");
function bubbleSort(array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    var length = array.length;
    for (var i = 0; i < length; i++) {
        // console.log('--- ');
        for (var j = 0; j < length - 1; j++) {
            // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
            if (compareFn(array[j], array[j + 1]) === util_1.Compare.BIGGER_THAN) {
                // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
                util_1.swap(array, j, j + 1);
            }
        }
    }
    return array;
}
exports.bubbleSort = bubbleSort;
