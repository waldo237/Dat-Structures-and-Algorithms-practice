"use strict";
(function nameSpace() {
    var SinglyLinkedListNode = /** @class */ (function () {
        function SinglyLinkedListNode(data) {
            this.data = data;
            this.next = null;
        }
        return SinglyLinkedListNode;
    }());
    var SinglyLinkedList = /** @class */ (function () {
        function SinglyLinkedList() {
            this.size = 0;
            this.head = null;
        }
        /**
         * insert
         */
        SinglyLinkedList.prototype.insert = function (data) {
            var newNode = new SinglyLinkedListNode(data);
            if (this.head === null) {
                this.head = newNode;
                this.size++;
            }
            else {
                newNode.next = this.head;
                this.head = newNode;
                this.size++;
            }
        };
        /**
         * remove
         */
        SinglyLinkedList.prototype.remove = function (value) {
            if (this.head === null) {
                return false;
            }
            var currentNode = this.head;
            if (currentNode.data === value) {
                this.head = currentNode.next;
                this.size--;
            }
            var prev = currentNode;
            while (currentNode) {
                if (currentNode.data === value) {
                    prev.next = currentNode.next;
                    prev = currentNode;
                    currentNode = currentNode.next;
                    this.size--;
                    break;
                }
                prev = currentNode;
                currentNode = currentNode.next;
            }
            return true;
        };
        /**
         * remove
         */
        SinglyLinkedList.prototype.removeHead = function () {
            if (!this.head) {
                return false;
            }
            else {
                this.head = this.head.next;
                this.size--;
            }
            return true;
        };
        return SinglyLinkedList;
    }());
    (function name() {
        var sll1 = new SinglyLinkedList();
        sll1.insert('uno'); // linked list is now:  1 -> null
        sll1.insert('doce'); // linked list is now: 12 -> 1 -> null
        sll1.insert('vente'); // linked list is now: 20 -> 12 -> 1 -> null
        sll1.insert('otros'); // linked list is now: 20 -> 12 -> 1 -> null
        sll1.remove('doce'); // linked list is now: 20 -> 1 -> null
        sll1.remove('uno'); // linked list is now: 1 -> null 
        sll1.removeHead(); // linked list is now:  12 -> 1 -> null
        console.log(JSON.stringify(sll1));
    })();
    var DoublyLinkedListNode = /** @class */ (function () {
        function DoublyLinkedListNode(data) {
            this.data = data;
            this.prev = null;
            this.next = null;
        }
        return DoublyLinkedListNode;
    }());
    var DoublyLinkedList = /** @class */ (function () {
        function DoublyLinkedList() {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        DoublyLinkedList.prototype.isEmpty = function () {
            return this.size === 0;
        };
        DoublyLinkedList.prototype.insertAtTail = function (data) {
            var newNode = new DoublyLinkedListNode(data);
            if (this.tail === null) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size++;
        };
        DoublyLinkedList.prototype.insertAtHead = function (data) {
            var newNode = new DoublyLinkedListNode(data);
            if (this.head === null) {
                this.head = newNode;
                this.tail = this.head;
            }
            else {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
            this.size++;
        };
        DoublyLinkedList.prototype.deleteAtHead = function () {
            var deletedNode = null;
            if (this.head === null) {
                return deletedNode;
            }
            else {
                deletedNode = this.head.data;
                if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                    this.size--;
                }
                else {
                    this.head = this.head.next;
                    this.head.prev = null;
                    this.size--;
                }
            }
            return deletedNode;
        };
        DoublyLinkedList.prototype.deleteAtTail = function () {
            var _a;
            var deletedNode = null;
            if (this.tail === null) {
                return deletedNode;
            }
            else {
                deletedNode = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
                if (this.tail === this.head) {
                    this.head = null;
                    this.tail = null;
                    this.size--;
                }
                else {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                    this.size--;
                }
            }
            return deletedNode;
        };
        DoublyLinkedList.prototype.findStartingHead = function (value) {
            var currentNode = this.head;
            var results = [];
            while (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) {
                if (currentNode.data === value) {
                    results.push(currentNode.data);
                }
                currentNode = currentNode.next;
            }
            return results;
        };
        DoublyLinkedList.prototype.findStartingTail = function (value) {
            var currentNode = this.tail;
            var results = [];
            while (currentNode === null || currentNode === void 0 ? void 0 : currentNode.prev) {
                if (currentNode.data === value) {
                    results.push(currentNode.data);
                }
                currentNode = currentNode.prev;
            }
            return results;
        };
        DoublyLinkedList.prototype.print = function () {
            var currentNode = this.head;
            while (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) {
                currentNode && console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        };
        return DoublyLinkedList;
    }());
    (function namespace2() {
        var dll1 = new DoublyLinkedList();
        dll1.insertAtHead(10); // ddl1's structure: tail: 10  head: 10 
        dll1.insertAtHead(12); // ddl1's structure: tail: 10  head: 12
        dll1.insertAtHead(12); // ddl1's structure: tail: 10  head: 12
        // dll1.insertAtHead(20); // ddl1's structure: tail: 10  head: 20
        // dll1.insertAtTail(30); // ddl1's structure: tail: 30  head: 20
        // dll1.insertAtTail(12); // ddl1's structure: tail: 30  head: 20
        // dll1.deleteAtHead();
        // dll1.deleteAtTail();
        // dll1.deleteAtTail();
        // console.log(dll1.findStartingHead(12))
        // console.log(dll1.print())
        // console.log(dll1)
        // console.log("doublyLinked", dll1);
    })();
    function reverseSingleLinkedList(sll) {
        var node = sll.head;
        var prev = null;
        while (node) {
            var temp = node.next;
            node.next = prev;
            prev = node;
            if (!temp)
                break;
            node = temp;
        }
        return node;
    }
    // delete duplicates in unsorted linkedlist
    function deleteDuplicateInUnsortedSll(sll1) {
        var track = [];
        var temp = sll1.head;
        var prev = null;
        while (temp) {
            if (track.indexOf(temp.data) >= 0) {
                prev.next = temp.next;
                sll1.size--;
            }
            else {
                track.push(temp.data);
                prev = temp;
            }
            temp = temp.next;
        }
        console.log(temp);
    }
    // //delete duplicates in unsorted linkedlist
    // function deleteDuplicateInUnsortedSllBest<T>(sll1:SinglyLinkedList<T>) {
    //     let track = {};
    //     let temp:SinglyLinkedListNode<T> | null= sll1.head;
    //     let prev = null;
    //     while (temp) {
    //         if(temp.data !== null){
    //             if (track[temp.data]) {
    //                 prev!.next = temp.next;
    //                 sll1.size--;
    //             } else {
    //                 track[temp.data] = true;
    //                 prev = temp;
    //             }
    //             temp = temp.next;
    //         }
    //     }
    //     console.log(temp);
    // }
}());
