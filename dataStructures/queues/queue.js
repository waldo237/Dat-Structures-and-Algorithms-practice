"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        else {
            return this.items.shift();
        }
    };
    Queue.prototype.peek = function () {
        if (!this.isEmpty())
            return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.print = function () {
        this.items.forEach(function (item) { return console.log(item); });
    };
    return Queue;
}());
// creating object for queue class 
var queue = new Queue();
// Testing dequeue and pop on an empty queue 
// returns Underflow 
console.log(queue.dequeue());
// returns true 
console.log(queue.isEmpty());
// Adding elements to the queue 
// queue contains [10, 20, 30, 40, 50] 
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
// returns 10 
console.log(queue.peek());
// removes 10 from the queue 
// queue contains [20, 30, 40, 50, 60] 
console.log(queue.dequeue());
// returns 20 
console.log(queue.peek());
// removes 20 
// queue contains [30, 40, 50, 60] 
console.log(queue.dequeue());
queue.print();
