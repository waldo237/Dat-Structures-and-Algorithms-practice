"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellSort = void 0;
var util_1 = require("../../util");
function shellSort(array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    var increment = array.length / 2;
    while (increment > 0) {
        for (var i = increment; i < array.length; i++) {
            var j = i;
            var temp = array[i];
            while (j >= increment && compareFn(array[j - increment], temp) === util_1.Compare.BIGGER_THAN) {
                array[j] = array[j - increment];
                j = j - increment;
            }
            array[j] = temp;
        }
        if (increment === 2) {
            increment = 1;
        }
        else {
            increment = Math.floor(increment * 5 / 11);
        }
    }
    return array;
}
exports.shellSort = shellSort;
