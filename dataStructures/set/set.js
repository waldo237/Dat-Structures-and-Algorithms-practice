"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.add(2); // exampleSet: Set(2) {1, 2}
exampleSet;
function intersectSets(setA, setB) {
    var e_1, _a;
    var intersection = new Set();
    try {
        for (var setB_1 = __values(setB), setB_1_1 = setB_1.next(); !setB_1_1.done; setB_1_1 = setB_1.next()) {
            var elem = setB_1_1.value;
            if (setA.has(elem)) {
                intersection.add(elem);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (setB_1_1 && !setB_1_1.done && (_a = setB_1.return)) _a.call(setB_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return intersection;
}
var set1 = new Set([1, 2, 3, 4]), set2 = new Set([2, 3]);
intersectSets(set1, set2); // Set {2, 3}
function isSuperset(setA, subset) {
    var e_2, _a;
    try {
        for (var subset_1 = __values(subset), subset_1_1 = subset_1.next(); !subset_1_1.done; subset_1_1 = subset_1.next()) {
            var elem = subset_1_1.value;
            if (!setA.has(elem)) {
                return false;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (subset_1_1 && !subset_1_1.done && (_a = subset_1.return)) _a.call(subset_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return true;
}
var set3 = new Set([1, 2, 3, 4]), set4 = new Set([2, 3]), set5 = new Set([5]);
isSuperset(set3, set4);
function unionSet(setA, setB) {
    var e_3, _a;
    var union = new Set(setA);
    try {
        for (var setB_2 = __values(setB), setB_2_1 = setB_2.next(); !setB_2_1.done; setB_2_1 = setB_2.next()) {
            var elem = setB_2_1.value;
            union.add(elem);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (setB_2_1 && !setB_2_1.done && (_a = setB_2.return)) _a.call(setB_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return union;
}
var setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]), setC = new Set([5]);
unionSet(setA, setB);
unionSet(setA, setC);
function differenceSet(setA, setB) {
    var e_4, _a;
    var difference = new Set(setA);
    try {
        for (var setB_3 = __values(setB), setB_3_1 = setB_3.next(); !setB_3_1.done; setB_3_1 = setB_3.next()) {
            var elem = setB_3_1.value;
            difference.delete(elem);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (setB_3_1 && !setB_3_1.done && (_a = setB_3.return)) _a.call(setB_3);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return difference;
}
var setAA = new Set([1, 2, 3, 4]), setBB = new Set([2, 3]);
differenceSet(setAA, setBB); // Set(2) {1, 4}
// Exercises
// Question 1
function checkDuplicates(arr) {
    var mySet = new Set(arr);
    return mySet.size < arr.length;
}
checkDuplicates([1, 2, 3, 4, 5]); // false
checkDuplicates([1, 1, 2, 3, 4, 5]); // true
// Question 2
function uniqueList(arr1, arr2) {
    var mySet = new Set(arr1.concat(arr2));
    return Array.from(mySet);
}
uniqueList([1, 1, 2, 2], [2, 3, 4, 5]); // [1,2,3,4,5]
uniqueList([1, 2], [3, 4, 5]); // [1,2,3,4,5]
uniqueList([], [2, 2, 3, 4, 5]); // [2,3,4,5]
