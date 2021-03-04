"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMinValue = exports.findMaxValue = void 0;
var util_1 = require("../../util");
function findMaxValue(array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    if (array && array.length > 0) {
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (compareFn(max, array[i]) === util_1.Compare.LESS_THAN) {
                max = array[i];
            }
        }
        return max;
    }
    return undefined;
}
exports.findMaxValue = findMaxValue;
function findMinValue(array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    if (array && array.length > 0) {
        var min = array[0];
        for (var i = 1; i < array.length; i++) {
            if (compareFn(min, array[i]) === util_1.Compare.BIGGER_THAN) {
                min = array[i];
            }
        }
        return min;
    }
    return undefined;
}
exports.findMinValue = findMinValue;
