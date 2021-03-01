(function nameSpace() {
    class SinglyLinkedListNode<T>{
        public data: T;
        public next: SinglyLinkedListNode<T> | null;

        constructor(data: T) {
            this.data = data;
            this.next = null;
        }
    }

    class SinglyLinkedList<T>{
        public head: SinglyLinkedListNode<T> | null;
        public size: number;
        constructor() {
            this.head = null;
            this.size = 0;
        }

        public isEmpty(): boolean {
            return this.size === 0;
        }

        public insert(data: T): void {
            if (this.head === null) {
                this.head = new SinglyLinkedListNode(data);
                this.size++;
            } else {
                const temp = this.head;
                this.head = new SinglyLinkedListNode(data);
                this.head.next = temp;
                this.size++;
            }
        }

        public remove(value: T): boolean {
            if (this.head === null) {
                return false;
            }
            let currentNode: SinglyLinkedListNode<T> | null = this.head;
            if (currentNode?.data === value) {
                this.head = currentNode.next;
                this.size--;
            } else {
                let prev = currentNode;
                while (currentNode) {
                    if (currentNode.data === value) {
                        prev!.next = currentNode.next;
                        prev = currentNode;
                        currentNode = currentNode.next;
                        this.size--;
                        break;
                    } else {
                        prev = currentNode;
                        currentNode = currentNode.next;
                    }
               
                }
             
            }
            return false;
        }
        public removeHead(): T | null {
            let deletedNode = null;
            if (this.head !== null) {
                deletedNode = this.head.data;
                this.head = this.head.next;
                this.size--;
            }
            return deletedNode;
        }
    }

    (function name() {
        const sll1 = new SinglyLinkedList();
        sll1.insert('uno'); // linked list is now:  1 -> null
        sll1.insert('doce'); // linked list is now: 12 -> 1 -> null
        sll1.insert('vente'); // linked list is now: 20 -> 12 -> 1 -> null
        sll1.insert('otros'); // linked list is now: 20 -> 12 -> 1 -> null
        sll1.remove('uno'); // linked list is now: 20 -> 1 -> null
        sll1.remove(20); // linked list is now: 1 -> null 
        sll1.removeHead(); // linked list is now:  12 -> 1 -> null
        // console.log(JSON.stringify(sll1))
    })()

    class DoublyLinkedListNode<T>{
        public prev: DoublyLinkedListNode<T> | null;
        public next: DoublyLinkedListNode<T> | null;
        public data: T;

        constructor(data: T) {
            this.data = data;
            this.prev = null;
            this.next = null;
        }
    }

    class DoublyLinkedList<T> {
        public head: DoublyLinkedListNode<T> | null;
        public tail: DoublyLinkedListNode<T> | null;
        public size: number;
        constructor() {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }

        public isEmpty(): boolean {
            return this.size === 0;
        }

        public insertAtTail(data: T) {
            const newNode = new DoublyLinkedListNode(data);
            if (this.tail === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size++;
        }

        public insertAtHead(data: T) {
            const newNode = new DoublyLinkedListNode<T>(data);
            if (this.head === null) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
            this.size++;
        }
        public deleteAtHead() {
            let deletedNode = null;

            if (this.head === null) {
                return deletedNode;
            } else {
                deletedNode = this.head.data;
                if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                    this.size--;
                } else {
                    this.head = this.head.next;
                    this.head!.prev = null;
                    this.size--;
                }
            }
            return deletedNode;
        }
        public deleteAtTail() {
            let deletedNode = null;

            if (this.tail === null) {
                return deletedNode;
                
            } else {
                deletedNode = this.tail?.data;
                if (this.tail === this.head) {
                    this.head = null;
                    this.tail = null;
                    this.size--;
                } else {
                    this.tail = this.tail.prev;
                    this.tail!.next = null;
                    this.size--;
                }
            }
            return deletedNode;
        }

        public findStartingHead(value: T): Array<T> {
            let currentNode = this.head;
            let results: Array<T> = [];
            while (currentNode?.next) {
                if (currentNode.data === value) {
                    results.push(currentNode.data);
                }
                currentNode = currentNode.next;
            }
            return results;
        }
        public findStartingTail(value: T): Array<T> {
            let currentNode = this.tail;
            let results: Array<T> = [];
            while (currentNode?.prev) {
                if (currentNode.data === value) {
                    results.push(currentNode.data);
                }
                currentNode = currentNode.prev;
            }
            return results;
        }

        public print(): void {
            let currentNode = this.head;

            while (currentNode?.next) {
                currentNode && console.log(currentNode.data);

                currentNode = currentNode.next;
            }
        }
    }

    (function namespace2() {
        const dll1 = new DoublyLinkedList();
        dll1.insertAtHead(10); // ddl1's structure: tail: 10  head: 10 
        dll1.insertAtHead(12); // ddl1's structure: tail: 10  head: 12
        dll1.insertAtHead(12); // ddl1's structure: tail: 10  head: 12
        // dll1.insertAtHead(20); // ddl1's structure: tail: 10  head: 20
        // dll1.insertAtTail(30); // ddl1's structure: tail: 30  head: 20
        // dll1.insertAtTail(12); // ddl1's structure: tail: 30  head: 20
        // dll1.deleteAtHead();
        // dll1.deleteAtTail();
        // dll1.deleteAtTail();
    
        console.log(dll1.findStartingHead(12))
        console.log(dll1.print())
        console.log(dll1)
        // console.log("doublyLinked", dll1);
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
    function deleteDuplicateInUnsortedSll<T>(sll1: SinglyLinkedList<T>) {
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


