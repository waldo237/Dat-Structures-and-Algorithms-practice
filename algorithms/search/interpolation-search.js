"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpolationSearch = void 0;
var util_1 = require("../../util");
function interpolationSearch(array, value, compareFn, equalsFn, diffFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    if (equalsFn === void 0) { equalsFn = util_1.defaultEquals; }
    if (diffFn === void 0) { diffFn = util_1.defaultDiff; }
    var length = array.length;
    var low = 0;
    var high = length - 1;
    var position = -1;
    var delta = -1;
    while (low <= high &&
        util_1.biggerEquals(value, array[low], compareFn) &&
        util_1.lesserEquals(value, array[high], compareFn)) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
        position = low + Math.floor((high - low) * delta);
        if (equalsFn(array[position], value)) {
            return position;
        }
        if (compareFn(array[position], value) === util_1.Compare.LESS_THAN) {
            low = position + 1;
        }
        else {
            high = position - 1;
        }
    }
    return util_1.DOES_NOT_EXIST;
}
exports.interpolationSearch = interpolationSearch;
