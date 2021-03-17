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
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
        // [array[a], array[b]] = [array[b], array[a]];
    }
    function partition(items, left, right) {
        var pivot = Math.floor(left + right / 2);
        var L = left;
        var R = right;
        while (L <= R) {
            while (items[L] < items[pivot]) {
                L++;
            }
            while (items[R] > items[pivot]) {
                R--;
            }
            if (L <= R) {
                swap(items, L, R);
                L++;
                R--;
            }
        }
        return L;
    }
    function quick(items, left, right) {
        var pivot = partition(items, left, right);
        if (left < pivot - 1) {
            quick(items, left, pivot - 1);
        }
        else if (right > pivot) {
            quick(items, pivot, right);
        }
        ;
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
        var left = mergeSort(arr.slice(0, middle));
        var right = mergeSort(arr.slice(middle, length));
        return merge(left, right);
    }
    var array1 = [5, 43, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 25, 63, 52];
    console.time('mergeSort');
    console.log(mergeSort(array1));
    console.timeEnd('mergeSort');
})();
