"use strict";
var LinkedListNode2 = /** @class */ (function () {
    function LinkedListNode2(value, next) {
        this.value = value;
        this.next = next || null;
    }
    return LinkedListNode2;
}());
var LinkedList2 = /** @class */ (function () {
    function LinkedList2() {
        this.head = null;
        this.tail = null;
    }
    LinkedList2.prototype.append = function (data) {
        var node = new LinkedListNode2(data, this.head);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    };
    LinkedList2.prototype.prepend = function (data) {
        var node = new LinkedListNode2(data, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        return this;
    };
    LinkedList2.prototype.delete = function (data) {
        if (!this.head) {
            return null;
        }
        var deletedNode = null;
        /*if the data to be deleted is in the head,
        point the head to the next node
        */
        while (this.head && this.equal(this.head.value, data)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        /*if the data to be deleted is in the next node,
       point the next node to the one next to it.
       */
        var currentNode = this.head;
        while (currentNode && currentNode.next) {
            if (this.equal(currentNode.next.value, data)) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        if (this.equal(this.tail.value, data)) {
            this.tail = currentNode;
        }
        return deletedNode;
    };
    LinkedList2.prototype.deleteLastValue = function () {
        var deletedTail = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedTail;
        }
        var currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedTail;
    };
    LinkedList2.prototype.deleteFirstValue = function () {
        if (!this.head) {
            return null;
        }
        var deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    };
    LinkedList2.prototype.find = function (value) {
        if (value === void 0) { value = undefined; }
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && this.equal(currentNode.value, value)) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    return LinkedList2;
}());
var list = new LinkedList();
list.append(2);
list.append(10);
list.append(20);
list.prepend(3);
list.append(10);
list.prepend(6);
list.deleteLastValue();
list.deleteLastValue();
list.deleteLastValue();
list.deleteLastValue();
list.deleteLastValue();
console.log(list.head);
console.log('found node:', list.find(3));
