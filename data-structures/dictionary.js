"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var value_pair_1 = require("./models/value-pair");
var Dictionary = /** @class */ (function () {
    function Dictionary(toStrFn) {
        if (toStrFn === void 0) { toStrFn = util_1.defaultToString; }
        this.toStrFn = toStrFn;
        this.table = {};
    }
    Dictionary.prototype.set = function (key, value) {
        if (key != null && value != null) {
            var tableKey = this.toStrFn(key);
            this.table[tableKey] = new value_pair_1.ValuePair(key, value);
            return true;
        }
        return false;
    };
    Dictionary.prototype.get = function (key) {
        var valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    };
    Dictionary.prototype.hasKey = function (key) {
        return this.table[this.toStrFn(key)] != null;
    };
    Dictionary.prototype.remove = function (key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    };
    Dictionary.prototype.values = function () {
        return this.keyValues().map(function (valuePair) { return valuePair.value; });
    };
    Dictionary.prototype.keys = function () {
        return this.keyValues().map(function (valuePair) { return valuePair.key; });
    };
    Dictionary.prototype.keyValues = function () {
        return Object.values(this.table);
    };
    Dictionary.prototype.forEach = function (callbackFn) {
        var valuePairs = this.keyValues();
        for (var i = 0; i < valuePairs.length; i++) {
            var result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    };
    Dictionary.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Dictionary.prototype.size = function () {
        return Object.keys(this.table).length;
    };
    Dictionary.prototype.clear = function () {
        this.table = {};
    };
    Dictionary.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var valuePairs = this.keyValues();
        var objString = "" + valuePairs[0].toString();
        for (var i = 1; i < valuePairs.length; i++) {
            objString = objString + "," + valuePairs[i].toString();
        }
        return objString;
    };
    return Dictionary;
}());
exports.default = Dictionary;
