"use strict";
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        this.value = null;
        this.next = null;
        this.value = value;
        this.next = next;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.prepend = function (data) {
        var node = new LinkedListNode(data, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        return this.head;
    };
    LinkedList.prototype.append = function (data) {
        var node = new LinkedListNode(data, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return node;
        }
        this.tail.next = node;
        this.tail = node;
        return node;
    };
    LinkedList.prototype.delete = function (value) {
        if (!this.head) {
        }
        var deletedNode = null;
        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        var currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
        return deletedNode;
    };
    LinkedList.prototype.find = function (data) {
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (data !== undefined && currentNode.value === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    LinkedList.prototype.deleteTail = function () {
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
    LinkedList.prototype.deleteHead = function () {
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
    LinkedList.prototype.reverse = function () {
        var currentNode = this.head;
        var prevNode = null;
        var nextNode = null;
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return this;
    };
    return LinkedList;
}());
var list = new LinkedList();
list.append(2);
list.prepend(3);
list.append(10);
list.append(20);
console.log(list);
exports.LinkedList = LinkedList;
