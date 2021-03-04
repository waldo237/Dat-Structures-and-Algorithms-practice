"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var linked_list_1 = __importDefault(require("./linked-list"));
var value_pair_1 = require("./models/value-pair");
var HashTableSeparateChaining = /** @class */ (function () {
    function HashTableSeparateChaining(toStrFn) {
        if (toStrFn === void 0) { toStrFn = util_1.defaultToString; }
        this.toStrFn = toStrFn;
        this.table = {};
    }
    HashTableSeparateChaining.prototype.loseloseHashCode = function (key) {
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
    HashTableSeparateChaining.prototype.hashCode = function (key) {
        return this.loseloseHashCode(key);
    };
    HashTableSeparateChaining.prototype.put = function (key, value) {
        if (key != null && value != null) {
            var position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new linked_list_1.default();
            }
            this.table[position].push(new value_pair_1.ValuePair(key, value));
            return true;
        }
        return false;
    };
    HashTableSeparateChaining.prototype.get = function (key) {
        var position = this.hashCode(key);
        var linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            var current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    };
    HashTableSeparateChaining.prototype.remove = function (key) {
        var position = this.hashCode(key);
        var linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            var current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    };
    HashTableSeparateChaining.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    HashTableSeparateChaining.prototype.size = function () {
        var count = 0;
        Object.values(this.table).forEach(function (linkedList) { return count += linkedList.size(); });
        return count;
    };
    HashTableSeparateChaining.prototype.clear = function () {
        this.table = {};
    };
    HashTableSeparateChaining.prototype.getTable = function () {
        return this.table;
    };
    HashTableSeparateChaining.prototype.toString = function () {
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
    return HashTableSeparateChaining;
}());
exports.default = HashTableSeparateChaining;
