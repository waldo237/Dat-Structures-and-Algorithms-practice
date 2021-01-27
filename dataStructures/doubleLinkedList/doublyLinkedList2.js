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
        this.head;
        this.tail;
    }
    DoublyLinkedList.prototype.append = function (data) {
        var node = new DoublyLinkedListNode(data, null, null);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    };
    DoublyLinkedList.prototype.prepend = function (data) {
        var node = new DoublyLinkedListNode(data, this.head, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        this.head.prev = node;
        this.head = node;
    };
    DoublyLinkedList.prototype.delete = function (data) {
        if (!this.head || !this.tail)
            return null;
        var deletedNode = null;
        if (this.head.data === data) {
            this.head = this.head.next;
            this.head.prev = null;
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
                return deletedNode;
            }
            currentNode = currentNode.next;
        }
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
        }
        this.head = this.tail;
        this.print();
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
list.append('uno');
list.append('dos');
list.append('tres');
list.append('cuatro');
list.prepend('zero');
list.reverse();
// list.delete('cuatro');
// list.delete('dos');
// list.print();
// console.log(list.tail)
