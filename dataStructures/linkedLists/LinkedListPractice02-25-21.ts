(function nameSpace() {


    class SinglyLinkedListNode<T>{
        data: T | null
        next: SinglyLinkedListNode<T> | null
        constructor(data: T | null) {
            this.data = data;
            this.next = null;
        }
    }

    class SinglyLinkedList<T> {
        head: SinglyLinkedListNode<T> | null
        size: number;
        constructor() {
            this.head = null;
            this.size = 0;
        }

        public isEmpty(): boolean {
            return this.size === 0;
        }
        
        public insert(value: T): void {
            if (this.head === null) { //If first node
                this.head = new SinglyLinkedListNode(value);
            } else {
                let temp = this.head;
                this.head = new SinglyLinkedListNode(value);
                this.head.next = temp;
            }
            this.size++;
        }

        public remove(value: T): void {
            let currentHead = this.head;
            if (currentHead?.data === value) {
                // just shift the head over. Head is now this new value
                this.head = currentHead.next;
                this.size--;
            } else {
                let prev = currentHead;
                while (currentHead?.next) {
                    if (currentHead?.data === value) {
                        // remove by skipping
                        prev!.next = currentHead.next;
                        prev = currentHead;
                        currentHead = currentHead.next;
                        break; // break out of the loop
                    }
                    prev = currentHead;
                    currentHead = currentHead.next;
                }
                //if wasn't found in the middle or head, must be tail
                if (currentHead?.data == value) {
                    prev!.next = null;
                }
                this.size--;
            }
        }

        public deleteAtHead(): T | null {
            let toReturn = null;

            if (this.head !== null) {
                toReturn = this.head.data;
                this.head = this.head.next;
                this.size--;
            }
            return toReturn;
        }
    }


    (function name() {
        const sll1 = new SinglyLinkedList();
        sll1.insert(1); // linked list is now:  1 -> null
        sll1.insert(12); // linked list is now: 12 -> 1 -> null
        sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
        sll1.remove(12); // linked list is now: 20 -> 1 -> null
        sll1.remove(20); // linked list is now: 1 -> null 
        sll1.deleteAtHead(); // linked list is now:  12 -> 1 -> null
        console.log(JSON.stringify(sll1))
    })()



    class DoublyLinkedListNode<T> {
        data: T;
        next: DoublyLinkedListNode<T> | null;
        prev: DoublyLinkedListNode<T> | null;

        constructor(data: T) {
            this.data = data;
            this.next = null;
            this.prev = null;

        }
    }


    class DoublyLinkedList<T> {
        head: DoublyLinkedListNode<T> | null;
        tail: DoublyLinkedListNode<T> | null;
        size: number;

        constructor() {
            this.head = null;
            this.tail = null;
            this.size = 0;

        }

        public isEmpty(): boolean {
            return this.size == 0;
        }

        public insertAtHead(value: T): void {
            if (this.head === null) { //If first node
                this.head = new DoublyLinkedListNode<T>(value);
                this.tail = this.head;
            } else {
                let temp = new DoublyLinkedListNode<T>(value);
                temp.next = this.head;
                this.head.prev = temp;
                this.head = temp;
            }
            this.size++;
        }

        public insertAtTail(value: T): void {
            if (this.tail === null) { //If first node
                this.tail = new DoublyLinkedListNode(value);
                this.head = this.tail;
            } else {
                let temp = new DoublyLinkedListNode(value);
                temp.prev = this.tail;
                this.tail.next = temp;
                this.tail = temp;
            }
            this.size++;
        }


        public deleteAtHead(): T | null {
            let toReturn = null;

            if (this.head !== null) {
                toReturn = this.head.data;

                if (this.tail === this.head) {
                    this.head = null;
                    this.tail = null;
                } else {
                    this.head = this.head.next;
                    this.head!.prev = null;
                }
            }
            this.size--;
            return toReturn;
        }

        public deleteAtTail(): T | null {
            let toReturn = null;

            if (this.tail !== null) {
                toReturn = this.tail.data;

                if (this.tail === this.head) {
                    this.head = null;
                    this.tail = null;
                } else {
                    this.tail = this.tail.prev;
                    this.tail!.next = null;
                }
            }
            this.size--;
            return toReturn;
        }
        public findStartingHead(value: T): boolean {
            let currentHead = this.head;
            while (currentHead?.next) {
                if (currentHead?.data == value) {
                    return true;
                }
                currentHead = currentHead.next;
            }
            return false;
        }
        public findStartingTail(value: T): boolean {
            let currentTail = this.tail;
            while (currentTail?.prev) {
                if (currentTail.data == value) {
                    return true;
                }
                currentTail = currentTail.prev;
            }
            return false;
        }

    }

    (function namespace2() {
        const dll1 = new DoublyLinkedList();
        dll1.insertAtHead(10); // ddl1's structure: tail: 10  head: 10 
        dll1.insertAtHead(12); // ddl1's structure: tail: 10  head: 12
        dll1.insertAtHead(20); // ddl1's structure: tail: 10  head: 20
        dll1.insertAtTail(30); // ddl1's structure: tail: 30  head: 20
        dll1.deleteAtTail();
        console.log("doublyLinked", dll1);
    })()










    function reverseSingleLinkedList<T>(sll: SinglyLinkedList<T>) {
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
    function deleteDuplicateInUnsortedSll<T>(sll1:SinglyLinkedList<T>) {
        var track = [];

        var temp = sll1.head;
        var prev = null;
        while (temp) {
            if (track.indexOf(temp.data) >= 0) {
                prev!.next = temp.next;
                sll1.size--;
            } else {
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

}())


