"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Set = /** @class */ (function () {
    function Set() {
        this.items = {};
    }
    Set.prototype.add = function (element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    };
    Set.prototype.delete = function (element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    };
    Set.prototype.has = function (element) {
        // return this.items.hasOwnProperty(element);
        return Object.prototype.hasOwnProperty.call(this.items, element);
    };
    Set.prototype.values = function () {
        return Object.values(this.items);
    };
    Set.prototype.union = function (otherSet) {
        var unionSet = new Set();
        this.values().forEach(function (value) { return unionSet.add(value); });
        otherSet.values().forEach(function (value) { return unionSet.add(value); });
        return unionSet;
    };
    Set.prototype.intersection = function (otherSet) {
        var intersectionSet = new Set();
        var values = this.values();
        var otherValues = otherSet.values();
        var biggerSet = values;
        var smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(function (value) {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    };
    Set.prototype.difference = function (otherSet) {
        var differenceSet = new Set();
        this.values().forEach(function (value) {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    };
    Set.prototype.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        var isSubset = true;
        this.values().every(function (value) {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    };
    Set.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Set.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    Set.prototype.clear = function () {
        this.items = {};
    };
    Set.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var values = this.values();
        var objString = "" + values[0];
        for (var i = 1; i < values.length; i++) {
            objString = objString + "," + values[i].toString();
        }
        return objString;
    };
    return Set;
}());
exports.default = Set;
