"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radixSort = void 0;
var min_max_search_1 = require("../search/min-max-search");
var countingSortForRadix = function (array, radixBase, significantDigit, minValue) {
    var bucketsIndex;
    var buckets = [];
    var aux = [];
    for (var i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }
    for (var i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        buckets[bucketsIndex]++;
    }
    for (var i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }
    for (var i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        aux[--buckets[bucketsIndex]] = array[i];
    }
    // array = [];
    // array.push(...aux);
    for (var i = 0; i < array.length; i++) {
        array[i] = aux[i];
    }
    return array;
};
function radixSort(array, radixBase) {
    if (radixBase === void 0) { radixBase = 10; }
    if (array.length < 2) {
        return array;
    }
    var minValue = min_max_search_1.findMinValue(array);
    var maxValue = min_max_search_1.findMaxValue(array);
    // Perform counting sort for each significant digit, starting at 1
    var significantDigit = 1;
    while ((maxValue - minValue) / significantDigit >= 1) {
        // console.log('radix sort for digit ' + significantDigit);
        array = countingSortForRadix(array, radixBase, significantDigit, minValue);
        // console.log(array.join());
        significantDigit *= radixBase;
    }
    return array;
}
exports.radixSort = radixSort;
