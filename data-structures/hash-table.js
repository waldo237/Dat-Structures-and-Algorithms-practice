"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var value_pair_1 = require("./models/value-pair");
var HashTable = /** @class */ (function () {
    function HashTable(toStrFn) {
        if (toStrFn === void 0) { toStrFn = util_1.defaultToString; }
        this.toStrFn = toStrFn;
        this.table = {};
    }
    HashTable.prototype.loseloseHashCode = function (key) {
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
    /* private djb2HashCode(key: K) {
      const tableKey = this.toStrFn(key);
      let hash = 5381;
      for (let i = 0; i < tableKey.length; i++) {
        hash = (hash * 33) + tableKey.charCodeAt(i);
      }
      return hash % 1013;
    } */
    HashTable.prototype.hashCode = function (key) {
        return this.loseloseHashCode(key);
    };
    HashTable.prototype.put = function (key, value) {
        if (key != null && value != null) {
            var position = this.hashCode(key);
            this.table[position] = new value_pair_1.ValuePair(key, value);
            return true;
        }
        return false;
    };
    HashTable.prototype.get = function (key) {
        var valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    };
    HashTable.prototype.remove = function (key) {
        var hash = this.hashCode(key);
        var valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    };
    HashTable.prototype.getTable = function () {
        return this.table;
    };
    HashTable.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    HashTable.prototype.size = function () {
        return Object.keys(this.table).length;
    };
    HashTable.prototype.clear = function () {
        this.table = {};
    };
    HashTable.prototype.toString = function () {
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
    return HashTable;
}());
exports.default = HashTable;
