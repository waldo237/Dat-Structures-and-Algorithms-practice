"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../util");
function heapify(array, index, heapSize, compareFn) {
    var largest = index;
    var left = (2 * index) + 1;
    var right = (2 * index) + 2;
    if (left < heapSize && compareFn(array[left], array[index]) > 0) {
        largest = left;
    }
    if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
        largest = right;
    }
    if (largest !== index) {
        util_1.swap(array, index, largest);
        heapify(array, largest, heapSize, compareFn);
    }
}
function buildMaxHeap(array, compareFn) {
    for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, compareFn);
    }
    return array;
}
function heapSort(array, compareFn) {
    if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
    var heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while (heapSize > 1) {
        util_1.swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn);
    }
    return array;
}
exports.default = heapSort;
