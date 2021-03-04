"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    Queue.prototype.enqueue = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    Queue.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Queue.prototype.clear = function () {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return Queue;
}());
exports.default = Queue;
