"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(compareFn, compare) {
        if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
        if (compare === void 0) { compare = util_1.Compare.LESS_THAN; }
        this.compareFn = compareFn;
        this.compare = compare;
        this.items = [];
    }
    PriorityQueue.prototype.enqueue = function (element) {
        var added = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.compareFn(element, this.items[i]) === this.compare) {
                this.items.splice(i, 0, element);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(element);
        }
    };
    PriorityQueue.prototype.dequeue = function () {
        return this.items.shift();
    };
    PriorityQueue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    PriorityQueue.prototype.clear = function () {
        this.items = [];
    };
    PriorityQueue.prototype.size = function () {
        return this.items.length;
    };
    PriorityQueue.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        return this.items;
    };
    return PriorityQueue;
}());
exports.default = PriorityQueue;
