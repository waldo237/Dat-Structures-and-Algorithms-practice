"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var value_pair_lazy_1 = require("./models/value-pair-lazy");
var HashTableLinearProbingLazy = /** @class */ (function () {
    function HashTableLinearProbingLazy(toStrFn) {
        if (toStrFn === void 0) { toStrFn = util_1.defaultToString; }
        this.toStrFn = toStrFn;
        this.table = {};
    }
    HashTableLinearProbingLazy.prototype.loseloseHashCode = function (key) {
        if (typeof key === 'number') {
            return key;
        }
        var tableKey = this.toStrFn(key);
        var hash = 0;
        for (var i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    };
    HashTableLinearProbingLazy.prototype.hashCode = function (key) {
        return this.loseloseHashCode(key);
    };
    HashTableLinearProbingLazy.prototype.put = function (key, value) {
        if (key != null && value != null) {
            var position = this.hashCode(key);
            if (this.table[position] == null ||
                (this.table[position] != null && this.table[position].isDeleted)) {
                this.table[position] = new value_pair_lazy_1.ValuePairLazy(key, value);
            }
            else {
                var index = position + 1;
                while (this.table[index] != null && !this.table[position].isDeleted) {
                    index++;
                }
                this.table[index] = new value_pair_lazy_1.ValuePairLazy(key, value);
            }
            return true;
        }
        return false;
    };
    HashTableLinearProbingLazy.prototype.get = function (key) {
        var position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key && !this.table[position].isDeleted) {
                return this.table[position].value;
            }
            var index = position + 1;
            while (this.table[index] != null &&
                (this.table[index].key !== key || this.table[index].isDeleted)) {
                if (this.table[index].key === key && this.table[index].isDeleted) {
                    return undefined;
                }
                index++;
            }
            if (this.table[index] != null &&
                this.table[index].key === key &&
                !this.table[index].isDeleted) {
                return this.table[position].value;
            }
        }
        return undefined;
    };
    HashTableLinearProbingLazy.prototype.remove = function (key) {
        var position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key && !this.table[position].isDeleted) {
                this.table[position].isDeleted = true;
                return true;
            }
            var index = position + 1;
            while (this.table[index] != null &&
                (this.table[index].key !== key || this.table[index].isDeleted)) {
                index++;
            }
            if (this.table[index] != null &&
                this.table[index].key === key &&
                !this.table[index].isDeleted) {
                this.table[index].isDeleted = true;
                return true;
            }
        }
        return false;
    };
    HashTableLinearProbingLazy.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    HashTableLinearProbingLazy.prototype.size = function () {
        var count = 0;
        Object.values(this.table).forEach(function (valuePair) {
            count += valuePair.isDeleted === true ? 0 : 1;
        });
        return count;
    };
    HashTableLinearProbingLazy.prototype.clear = function () {
        this.table = {};
    };
    HashTableLinearProbingLazy.prototype.getTable = function () {
        return this.table;
    };
    HashTableLinearProbingLazy.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var keys = Object.keys(this.table);
        var objString = "{" + keys[0] + " => " + this.table[keys[0]].toString() + "}";
        for (var i = 1; i < keys.length; i++) {
            objString = objString + ",{" + keys[i] + " => " + this.table[keys[i]].toString() + "}";
        }
        return objString;
    };
    return HashTableLinearProbingLazy;
}());
exports.default = HashTableLinearProbingLazy;
