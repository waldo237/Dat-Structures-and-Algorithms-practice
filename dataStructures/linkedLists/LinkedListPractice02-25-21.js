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
            this.head = null;
            this.size = 0;
        }
        SinglyLinkedList.prototype.isEmpty = function () {
            return this.size === 0;
        };
        SinglyLinkedList.prototype.insert = function (value) {
            if (this.head === null) { //If first node
                this.head = new SinglyLinkedListNode(value);
            }
            else {
                var temp = this.head;
                this.head = new SinglyLinkedListNode(value);
                this.head.next = temp;
            }
            this.size++;
        };
        SinglyLinkedList.prototype.remove = function (value) {
            var currentHead = this.head;
            if ((currentHead === null || currentHead === void 0 ? void 0 : currentHead.data) === value) {
                // just shift the head over. Head is now this new value
                this.head = currentHead.next;
                this.size--;
            }
            else {
                var prev = currentHead;
                while (currentHead === null || currentHead === void 0 ? void 0 : currentHead.next) {
                    if ((currentHead === null || currentHead === void 0 ? void 0 : currentHead.data) === value) {
                        // remove by skipping
                        prev.next = currentHead.next;
                        prev = currentHead;
                        currentHead = currentHead.next;
                        break; // break out of the loop
                    }
                    prev = currentHead;
                    currentHead = currentHead.next;
                }
                //if wasn't found in the middle or head, must be tail
                if ((currentHead === null || currentHead === void 0 ? void 0 : currentHead.data) == value) {
                    prev.next = null;
                }
                this.size--;
            }
        };
        SinglyLinkedList.prototype.deleteAtHead = function () {
            var toReturn = null;
            if (this.head !== null) {
                toReturn = this.head.data;
                this.head = this.head.next;
                this.size--;
            }
            return toReturn;
        };
        return SinglyLinkedList;
    }());
    (function name() {
        var sll1 = new SinglyLinkedList();
        sll1.insert(1); // linked list is now:  1 -> null
        sll1.insert(12); // linked list is now: 12 -> 1 -> null
        sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
        sll1.remove(12); // linked list is now: 20 -> 1 -> null
        sll1.remove(20); // linked list is now: 1 -> null 
        sll1.deleteAtHead(); // linked list is now:  12 -> 1 -> null
        console.log(JSON.stringify(sll1));
    })();
    var DoublyLinkedListNode = /** @class */ (function () {
        function DoublyLinkedListNode(data) {
            this.data = data;
            this.next = null;
            this.prev = null;
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
            return this.size == 0;
        };
        DoublyLinkedList.prototype.insertAtHead = function (value) {
            if (this.head === null) { //If first node
                this.head = new DoublyLinkedListNode(value);
                this.tail = this.head;
            }
            else {
                var temp = new DoublyLinkedListNode(value);
                temp.next = this.head;
                this.head.prev = temp;
                this.head = temp;
            }
            this.size++;
        };
        DoublyLinkedList.prototype.insertAtTail = function (value) {
            if (this.tail === null) { //If first node
                this.tail = new DoublyLinkedListNode(value);
                this.head = this.tail;
            }
            else {
                var temp = new DoublyLinkedListNode(value);
                temp.prev = this.tail;
                this.tail.next = temp;
                this.tail = temp;
            }
            this.size++;
        };
        DoublyLinkedList.prototype.deleteAtHead = function () {
            var toReturn = null;
            if (this.head !== null) {
                toReturn = this.head.data;
                if (this.tail === this.head) {
                    this.head = null;
                    this.tail = null;
                }
                else {
                    this.head = this.head.next;
                    this.head.prev = null;
                }
            }
            this.size--;
            return toReturn;
        };
        DoublyLinkedList.prototype.deleteAtTail = function () {
            var toReturn = null;
            if (this.tail !== null) {
                toReturn = this.tail.data;
                if (this.tail === this.head) {
                    this.head = null;
                    this.tail = null;
                }
                else {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
            }
            this.size--;
            return toReturn;
        };
        DoublyLinkedList.prototype.findStartingHead = function (value) {
            var currentHead = this.head;
            while (currentHead === null || currentHead === void 0 ? void 0 : currentHead.next) {
                if ((currentHead === null || currentHead === void 0 ? void 0 : currentHead.data) == value) {
                    return true;
                }
                currentHead = currentHead.next;
            }
            return false;
        };
        DoublyLinkedList.prototype.findStartingTail = function (value) {
            var currentTail = this.tail;
            while (currentTail === null || currentTail === void 0 ? void 0 : currentTail.prev) {
                if (currentTail.data == value) {
                    return true;
                }
                currentTail = currentTail.prev;
            }
            return false;
        };
        return DoublyLinkedList;
    }());
    (function namespace2() {
        var dll1 = new DoublyLinkedList();
        dll1.insertAtHead(10); // ddl1's structure: tail: 10  head: 10 
        dll1.insertAtHead(12); // ddl1's structure: tail: 10  head: 12
        dll1.insertAtHead(20); // ddl1's structure: tail: 10  head: 20
        dll1.insertAtTail(30); // ddl1's structure: tail: 30  head: 20
        dll1.deleteAtTail();
        console.log("doublyLinked", dll1);
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
