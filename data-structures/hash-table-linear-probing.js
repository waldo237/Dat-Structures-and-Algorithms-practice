"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var value_pair_1 = require("./models/value-pair");
var HashTableLinearProbing = /** @class */ (function () {
    function HashTableLinearProbing(toStrFn) {
        if (toStrFn === void 0) { toStrFn = util_1.defaultToString; }
        this.toStrFn = toStrFn;
        this.table = {};
    }
    HashTableLinearProbing.prototype.loseloseHashCode = function (key) {
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
    HashTableLinearProbing.prototype.hashCode = function (key) {
        return this.loseloseHashCode(key);
    };
    HashTableLinearProbing.prototype.put = function (key, value) {
        if (key != null && value != null) {
            var position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new value_pair_1.ValuePair(key, value);
            }
            else {
                var index = position + 1;
                while (this.table[index] != null) {
                    index++;
                }
                this.table[index] = new value_pair_1.ValuePair(key, value);
            }
            return true;
        }
        return false;
    };
    HashTableLinearProbing.prototype.get = function (key) {
        var position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            }
            var index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                return this.table[position].value;
            }
        }
        return undefined;
    };
    HashTableLinearProbing.prototype.remove = function (key) {
        var position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
            var index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    };
    HashTableLinearProbing.prototype.verifyRemoveSideEffect = function (key, removedPosition) {
        var hash = this.hashCode(key);
        var index = removedPosition + 1;
        while (this.table[index] != null) {
            var posHash = this.hashCode(this.table[index].key);
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    };
    HashTableLinearProbing.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    HashTableLinearProbing.prototype.size = function () {
        return Object.keys(this.table).length;
    };
    HashTableLinearProbing.prototype.clear = function () {
        this.table = {};
    };
    HashTableLinearProbing.prototype.getTable = function () {
        return this.table;
    };
    HashTableLinearProbing.prototype.toString = function () {
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
    return HashTableLinearProbing;
}());
exports.default = HashTableLinearProbing;
