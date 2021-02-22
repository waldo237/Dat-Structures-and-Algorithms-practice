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
// class DoublyLinkedList<T>{
//     head: DoublyLinkedListNode<T> | null = null;
//     tail: DoublyLinkedListNode<T> | null = null;
//     size: number = 0;
//     constructor() {
//         this.head;
//         this.tail;
//     }
//     public append(data: T): void {
//         const node: DoublyLinkedListNode<T> = new DoublyLinkedListNode<T>(data, null, null);
//         if (!this.tail) {
//             this.head = node;
//             this.tail = node;
//             this.size++;
//         } else {
//             this.tail.next = node;
//             node.prev = this.tail;
//             this.tail = node;
//             this.size++;
//         }
//     }
//     public prepend(data: T): void {
//         const node = new DoublyLinkedListNode<T>(data, this.head, null);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//             this.size++;
//         } else {
//             this.head.prev = node;
//             this.head = node;
//             this.size++;
//         }
//     }
//     public remove(data: T): DoublyLinkedListNode<T> | null {
//         if (!this.head || !this.tail) return null;
//         let deletedNode: DoublyLinkedListNode<T> | null = null;
//         if (this.head.data === data) {
//             this.head = this.head.next;
//             this.head!.prev = null;
//             this.size--;
//             return deletedNode
//         }
//         let currentNode: DoublyLinkedListNode<T> | null = this.head;
//         while (currentNode) {
//             if (currentNode.data === data) {
//                 deletedNode = currentNode;
//                 if (!currentNode.next) this.tail = this.tail.prev //update the tail
//                 if (currentNode.next) currentNode.next.prev = currentNode.prev;
//                 if (currentNode.prev) currentNode.prev.next = currentNode.next;
//                 this.size--;
//                 return deletedNode;
//             }
//             currentNode = currentNode.next;
//         }
//         return deletedNode;
//     }
//     public removeFirst(): DoublyLinkedListNode<T> | null {
//         if (!this.head) return null;
//         let deletedNode: DoublyLinkedListNode<T> | null = this.head;
//         this.head = this.head.next;
//         this.head!.prev = null;
//         this.size--;
//         return deletedNode
//     }
//     public reverse(): void {
//         if (this.head) {
//             let currentNode: DoublyLinkedListNode<T> | null = this.head;
//             let temp: DoublyLinkedListNode<T> | null = null;
//             while (currentNode) {
//                 temp = currentNode.prev;
//                 currentNode.prev = currentNode.next;
//                 currentNode.next = temp;
//                 currentNode = currentNode.prev;
//             }
//             this.head = this.tail;
//         }
//     }
//     public print(): void {
//         let currentNode: DoublyLinkedListNode<T> | null;
//         currentNode = this.head;
//         while (currentNode) {
//             console.log(currentNode.data);
//             currentNode = currentNode.next;
//         }
//     }
// }
var list = new DoublyLinkedList();
console.log('the size is', list.size);
list.append('uno');
console.log('the size is', list.size);
list.append('dos');
list.append('tres');
console.log('the size is', list.size);
list.append('cuatro');
list.prepend('zero');
// list.reverse()
console.log('the size is', list.size);
// list.removeFirst();
// list.removeFirst();
list.remove('zero');
console.log('the size is', list.size);
list.reverse();
list.print();
// console.log(list.tail)
