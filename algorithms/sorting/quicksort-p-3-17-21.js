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
(function name() {
    function swap(array, a, b) {
        var _a;
        _a = __read([array[b], array[a]], 2), array[a] = _a[0], array[b] = _a[1];
    }
    function partition(items, left, right) {
        var pivot = items[Math.floor((right + left) / 2)], //middle element
        L = left, //left pointer
        R = right; //right pointer
        while (L <= R) {
            while (items[L] < pivot) {
                L++;
            }
            while (items[R] > pivot) {
                R--;
            }
            if (L <= R) {
                swap(items, L, R); //swap two elements
                L++;
                R--;
            }
        }
        return L;
    }
    function quick(items, left, right) {
        var pivot;
        if (items.length > 1) {
            pivot = partition(items, left, right); //pivot returned from partition
            if (left < pivot - 1) { //more elements on the left side of the pivot
                quick(items, left, pivot - 1);
            }
            if (pivot < right) { //more elements on the right side of the pivot
                quick(items, pivot, right);
            }
        }
        return items;
    }
    function quickSort(items) {
        return quick(items, 0, items.length - 1);
    }
    ;
    var array1 = [5, 43, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 25, 63, 52];
    console.time('quickSort');
    console.log(quickSort(array1));
    console.timeEnd('quickSort');
})();
(function namespace2() {
    function merge(left, right) {
        var sorted = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sorted.push(left.shift());
            }
            else {
                sorted.push(right.shift());
            }
        }
        return sorted.concat.apply(sorted, __spread(left, right));
    }
    function mergeSort(arr) {
        var length = arr.length;
        if (length <= 1)
            return arr;
        var middle = Math.floor(length / 2);
        var left = arr.slice(0, middle);
        var right = arr.slice(middle, length);
        return merge(left, right);
    }
    var array1 = [5, 43, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 25, 63, 52];
    console.time('mergeSort');
    console.log(mergeSort(array1));
    console.timeEnd('mergeSort');
})();
