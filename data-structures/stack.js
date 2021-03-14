"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.items = {};
    }
    Stack.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    Stack.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.items[0];
        for (var i = 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return Stack;
}());
exports.default = Stack;
