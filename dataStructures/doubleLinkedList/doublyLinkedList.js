"use strict";
var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    return DoublyLinkedListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.head;
        this.tail;
    }
    DoublyLinkedList.prototype.append = function (data) {
        var newNode = new DoublyLinkedListNode(data, null, null);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.size++;
        }
    };
    DoublyLinkedList.prototype.prepend = function (data) {
        var newNode = new DoublyLinkedListNode(data, null, null);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    };
    DoublyLinkedList.prototype.remove = function (data) {
        var _a, _b;
        var deletedNode = null, currentNode = this.head;
        // If HEAD is going to be deleted...
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.data) === data) {
            deletedNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return deletedNode;
        }
        // If tail is going to be deleted...
        if (((_b = this.tail) === null || _b === void 0 ? void 0 : _b.data) === data) {
            deletedNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            return deletedNode;
        }
        while (currentNode) {
            if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.data) === data) {
                if (!currentNode.next)
                    this.tail = this.tail.prev;
                currentNode.next.prev = currentNode.prev;
                currentNode.prev.next = currentNode.next;
                deletedNode = currentNode;
                this.size--;
            }
            currentNode = currentNode.next;
        }
        return deletedNode;
    };
    DoublyLinkedList.prototype.removeFirst = function () {
        if (!this.head) {
            return null;
        }
        var deletedNode = this.head;
        if (this.head.next) {
            this.head.next.prev = this.head.prev;
            this.size--;
        }
        this.head = this.head.next;
        return deletedNode;
    };
    DoublyLinkedList.prototype.reverse = function () {
        if (this.head) {
            var currentNode = this.head, temp = null;
            ;
            while (currentNode) {
                temp = currentNode.prev;
                currentNode.prev = currentNode.next;
                currentNode.next = temp;
                currentNode = currentNode.prev;
            }
            this.head = this.tail;
        }
    };
    DoublyLinkedList.prototype.print = function () {
        var currentNode;
        currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    };
    return DoublyLinkedList;
}());
var list = new DoublyLinkedList();
console.log('the size is', list.size);
list.append('uno');
console.log('the size is', list.size);
list.append('dos');
list.append('tres');
console.log('the size is', list.size);
list.append('cuatro');
list.prepend('zero');
console.log('the size is', list.size);
list.removeFirst();
list.remove('zero');
list.reverse();
list.removeFirst();
list.removeFirst();
list.removeFirst();
console.log('the size is', list.size);
list.print();
// console.log(list.tail)
