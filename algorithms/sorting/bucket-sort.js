"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketSort = void 0;
var insertion_sort_1 = require("./insertion-sort");
function createBuckets(array, bucketSize) {
    var minValue = array[0];
    var maxValue = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
        else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = [];
    for (var i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }
    for (var i = 0; i < array.length; i++) {
        buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
    }
    return buckets;
}
function sortBuckets(buckets) {
    var sortedArray = [];
    for (var i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertion_sort_1.insertionSort(buckets[i]);
            sortedArray.push.apply(sortedArray, __spread(buckets[i]));
        }
    }
    return sortedArray;
}
function bucketSort(array, bucketSize) {
    if (bucketSize === void 0) { bucketSize = 5; }
    if (array.length < 2) {
        return array;
    }
    var buckets = createBuckets(array, bucketSize);
    return sortBuckets(buckets);
}
exports.bucketSort = bucketSort;
