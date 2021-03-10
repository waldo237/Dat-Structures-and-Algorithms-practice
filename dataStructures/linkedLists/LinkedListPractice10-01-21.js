"use strict";
(function singlyLinkListNamespace() {
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
        /**
         * insert
         */
        SinglyLinkedList.prototype.insert = function (data) {
            var newNode = new SinglyLinkedListNode(data);
            if (!this.head) {
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
         * find
         */
        SinglyLinkedList.prototype.find = function (value) {
            var result = null;
            if (!this.head) {
                return result;
            }
            else {
                var currentNode = this.head;
                if (currentNode.data == value) {
                    result = this.head.data;
                    return result;
                }
                else {
                    while (currentNode) {
                        if (currentNode.data == value) {
                            result = currentNode.data;
                            break;
                        }
                        else {
                            currentNode = currentNode.next;
                        }
                    }
                }
            }
            return result;
        };
        /**
         * remove
         */
        SinglyLinkedList.prototype.remove = function (value) {
            var _a;
            var result = false;
            if (!this.head) {
                return result;
            }
            else {
                var currentNode = this.head;
                if (currentNode.data == value) {
                    this.head = currentNode.next;
                    this.size--;
                    result = true;
                    return result;
                }
                else {
                    while (currentNode) {
                        if (((_a = currentNode.next) === null || _a === void 0 ? void 0 : _a.data) == value) {
                            currentNode.next = currentNode.next.next;
                            this.size--;
                            result = true;
                            break;
                        }
                        else {
                            currentNode = currentNode.next;
                        }
                    }
                }
            }
            return result;
        };
        /**
         * removeHead
         */
        SinglyLinkedList.prototype.removeHead = function () {
            var result = false;
            if (!this.head) {
                return result;
            }
            else {
                var currentNode = this.head;
                this.head = currentNode.next;
                this.size--;
                result = true;
                return result;
            }
        };
        return SinglyLinkedList;
    }());
    (function name() {
        var sll1 = new SinglyLinkedList();
        sll1.insert('uno'); // linked list is now:  1 -> null
        sll1.insert('doce'); // linked list is now: 12 -> 1 -> null
        sll1.insert('vente'); // linked list is now: 20 -> 12 -> 1 -> null
        sll1.insert('otros'); // linked list is now: 20 -> 12 -> 1 -> null
        // sll1.remove('otros'); // linked list is now: 20 -> 1 -> null
        // sll1.remove('vente'); // linked list is now: 20 -> 1 -> null
        // sll1.remove('uno'); // linked list is now: 1 -> null 
        // console.log('remove', sll1.remove('doce')); // linked list is now: 1 -> null 
        sll1.removeHead(); // linked list is now:  12 -> 1 -> null
        sll1.removeHead(); // linked list is now:  12 -> 1 -> null
        sll1.removeHead(); // linked list is now:  12 -> 1 -> null
        // sll1.removeHead(); // linked list is now:  12 -> 1 -> null
        console.log(JSON.stringify(sll1));
        console.log(sll1.find('doce'));
    })();
})();
(function DoublyLinkListNamespace() {
    var DoublyLinkedListNode = /** @class */ (function () {
        function DoublyLinkedListNode(data) {
            this.prev = null;
            this.next = null;
            this.data = data;
        }
        return DoublyLinkedListNode;
    }());
    var DoublyLinkedList = /** @class */ (function () {
        function DoublyLinkedList() {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        /**
         * append
         */
        DoublyLinkedList.prototype.append = function (data) {
            var newNode = new DoublyLinkedListNode(data);
            if (!this.tail) {
                this.head = newNode;
                this.tail = this.head;
                this.size++;
            }
            else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
                this.size++;
            }
        };
        /**
         * prepend
         */
        DoublyLinkedList.prototype.prepend = function (data) {
            var newNode = new DoublyLinkedListNode(data);
            if (!this.head) {
                this.head = newNode;
                this.tail = this.head;
                this.size++;
            }
            else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
                this.size++;
            }
        };
        /**
         * print
         */
        DoublyLinkedList.prototype.print = function () {
            var currentNode = this.head;
            while (currentNode) {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        };
        /**
         * findStartingHead
          */
        DoublyLinkedList.prototype.findStartingHead = function (value) {
            var results = [];
            if (!this.head) {
                return null;
            }
            var currentNode = this.head;
            while (currentNode) {
                if (currentNode.data == value) {
                    results.push(currentNode.data);
                }
                currentNode = currentNode.next;
            }
            return results.length ? results : null;
        };
        /**
         * remove
         */
        DoublyLinkedList.prototype.remove = function (value) {
            var _a;
            var result = false;
            // the list is empty
            if (!this.head) {
                return result;
            }
            // if it's the last node
            if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
                result = true;
                this.size--;
                return result;
            }
            // if head is to be deleted
            if (this.head.data === value) {
                this.head = this.head.next;
                this.head.prev = null;
                result = true;
                this.size--;
            }
            // if head is to be deleted
            if (((_a = this.tail) === null || _a === void 0 ? void 0 : _a.data) === value) {
                this.tail = this.tail.prev;
                this.tail.next = null;
                result = true;
                this.size--;
            }
            var currentNode = this.head;
            while (currentNode) {
                if (currentNode.data == value) {
                    if (!currentNode.next) {
                        this.tail = this.tail.prev;
                    }
                    ;
                    currentNode.next.prev = currentNode.prev;
                    currentNode.prev.next = currentNode.next;
                    result = true;
                    this.size--;
                }
                currentNode = currentNode.next;
            }
            return result;
        };
        return DoublyLinkedList;
    }());
    (function namespace2() {
        var dll1 = new DoublyLinkedList();
        dll1.append('primero');
        dll1.append('segundo');
        dll1.append('tercero');
        console.log('removing', dll1.remove('segundo'));
        console.log('removing', dll1.remove('primero'));
        console.log('removing', dll1.remove('tercero'));
        dll1.print();
        console.log(dll1.findStartingHead('c'));
        // dll1.append(20); // ddl1's structure: tail: 10  head: 20
        // dll1.prepend(30); // ddl1's structure: tail: 30  head: 20
        // dll1.prepend(12); // ddl1's structure: tail: 30  head: 20
        // dll1.prepend(3);
        // dll1.append();
        // dll1.append();
        // console.log(dll1.findStartingHead(12))
        // console.log(dll1.print())
        // console.log(dll1)
        // console.log("doublyLinked", dll1);
    })();
    // function reverseSingleLinkedList<T>(sll: SinglyLinkedList<T>) {
    //     var node = sll.head;
    //     var prev = null;
    //     while (node) {
    //         var temp = node.next;
    //         node.next = prev;
    //         prev = node;
    //         if (!temp)
    //             break;
    //         node = temp;
    //     }
    //     return node;
    // }
    // // delete duplicates in unsorted linkedlist
    // function deleteDuplicateInUnsortedSll<T>(sll1: SinglyLinkedList<T>) {
    //     var track = [];
    //     var temp = sll1.head;
    //     var prev = null;
    //     while (temp) {
    //         if (track.indexOf(temp.data) >= 0) {
    //             prev!.next = temp.next;
    //             sll1.size--;
    //         } else {
    //             track.push(temp.data);
    //             prev = temp;
    //         }
    //         temp = temp.next;
    //     }
    //     console.log(temp);
    // }
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
