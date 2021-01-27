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
        var node = new DoublyLinkedListNode(data, null, null);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
            this.size++;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.size++;
        }
    };
    DoublyLinkedList.prototype.prepend = function (data) {
        var node = new DoublyLinkedListNode(data, this.head, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.size++;
        }
        else {
            this.head.prev = node;
            this.head = node;
            this.size++;
        }
    };
    DoublyLinkedList.prototype.remove = function (data) {
        if (!this.head || !this.tail)
            return null;
        var deletedNode = null;
        if (this.head.data === data) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return deletedNode;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                deletedNode = currentNode;
                if (!currentNode.next)
                    this.tail = this.tail.prev; //update the tail
                if (currentNode.next)
                    currentNode.next.prev = currentNode.prev;
                if (currentNode.prev)
                    currentNode.prev.next = currentNode.next;
                this.size--;
                return deletedNode;
            }
            currentNode = currentNode.next;
        }
        return deletedNode;
    };
    DoublyLinkedList.prototype.removeFirst = function () {
        if (!this.head)
            return null;
        var deletedNode = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return deletedNode;
    };
    DoublyLinkedList.prototype.reverse = function () {
        if (this.head) {
            var currentNode = this.head;
            var temp = null;
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
list.reverse();
console.log('the size is', list.size);
list.removeFirst();
list.removeFirst();
list.remove('dos');
console.log('the size is', list.size);
list.print();
// console.log(list.tail)
