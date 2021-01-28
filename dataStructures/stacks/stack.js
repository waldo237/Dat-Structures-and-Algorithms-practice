"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.items = [];
        this.top = null;
    }
    Stack.prototype.peek = function () {
        if (!this.items.length)
            return null;
        return this.top;
    };
    Stack.prototype.clear = function () {
        if (!this.items.length)
            return null;
        this.items = [];
    };
    Stack.prototype.pop = function () {
        if (!this.items.length) {
            return null;
        }
        else {
            if (this.items.length === 1) {
                this.top = null;
                return this.items.pop();
            }
            else {
                this.top = this.items[this.items.length - 2];
                return this.items.pop();
            }
        }
    };
    Stack.prototype.push = function (data) {
        this.items.push(data);
        this.top = data;
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.print = function () {
        this.items.forEach(function (elem, i) { return console.log("element number " + (i + 1) + " =>", elem); });
    };
    return Stack;
}());
var stack = new Stack();
stack.push(4);
stack.push(2);
stack.push(5);
stack.push(6);
stack.push(7);
stack.pop();
stack.print();
console.log('length:', stack.size());
console.log('peek:', stack.peek());
stack.pop();
console.log('length:', stack.size());
console.log('peek:', stack.peek());
