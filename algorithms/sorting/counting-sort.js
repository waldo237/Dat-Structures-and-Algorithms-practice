"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countingSort = void 0;
var min_max_search_1 = require("../search/min-max-search");
function countingSort(array) {
    if (array.length < 2) {
        return array;
    }
    var maxValue = min_max_search_1.findMaxValue(array);
    var sortedIndex = 0;
    var counts = new Array(maxValue + 1);
    array.forEach(function (element) {
        if (!counts[element]) {
            counts[element] = 0;
        }
        counts[element]++;
    });
    // console.log('Frequencies: ' + counts.join());
    counts.forEach(function (element, i) {
        while (element > 0) {
            array[sortedIndex++] = i;
            element--;
        }
    });
    return array;
}
exports.countingSort = countingSort;
