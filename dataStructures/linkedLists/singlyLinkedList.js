"use strict";
var SinglyLinkedListNode = /** @class */ (function () {
    function SinglyLinkedListNode(data, next) {
        this.data = data;
        this.next = next;
    }
    return SinglyLinkedListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    SinglyLinkedList.prototype.prepend = function (data) {
        var node = new SinglyLinkedListNode(data, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    };
    ;
    SinglyLinkedList.prototype.append = function (data) {
        var node = new SinglyLinkedListNode(data, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    };
    ;
    SinglyLinkedList.prototype.find = function (data) {
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return null;
    };
    ;
    SinglyLinkedList.prototype.delete = function (data) {
        if (!this.head) {
            return null;
        }
        var deletedNode = null;
        var currentNode = this.head;
        if (currentNode.data === data) {
            deletedNode = currentNode;
            this.head = currentNode.next;
            return deletedNode;
        }
        while (currentNode) {
            if (currentNode.next.data === data) {
                deletedNode = currentNode.next;
                this.head.next = currentNode.next.next;
                return deletedNode;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return deletedNode;
    };
    SinglyLinkedList.prototype.print = function () {
        var currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    };
    SinglyLinkedList.prototype.deleteTail = function () {
        var deletedNode = null;
        if (this.head === this.tail) {
            deletedNode = this.head;
            this.head = null;
            this.tail = null;
            return deletedNode;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (!currentNode.next.next) {
                deletedNode = currentNode.next;
                currentNode.next = null;
            }
            currentNode = currentNode.next;
        }
        deletedNode = this.tail;
        this.tail = null;
        return deletedNode;
    };
    SinglyLinkedList.prototype.deleteHead = function () {
        if (!this.head)
            return null;
        var deletedNode = this.head;
        this.head = this.head.next;
        return deletedNode;
    };
    SinglyLinkedList.prototype.reverseList = function () {
        var next;
        var prev = null;
        var currentNode = this.head;
        while (currentNode) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        this.head = this.tail;
    };
    return SinglyLinkedList;
}());
var single = new SinglyLinkedList();
single.append('uno');
single.append('dos');
single.append('tres');
single.append('cuatro');
single.prepend('zero');
single.reverseList();
// single.deleteHead();
// single.deleteHead();
// single.deleteHead();
single.print();
// console.log("head", single.head)
// console.log("tail", single.tail)
