"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deque = /** @class */ (function () {
    function Deque() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    Deque.prototype.addFront = function (element) {
        if (this.isEmpty()) {
            this.addBack(element);
        }
        else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }
        else {
            for (var i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.items[0] = element;
        }
    };
    Deque.prototype.addBack = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Deque.prototype.removeFront = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Deque.prototype.removeBack = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    Deque.prototype.peekFront = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    Deque.prototype.peekBack = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    Deque.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Deque.prototype.clear = function () {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    Deque.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Deque.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return Deque;
}());
exports.default = Deque;
