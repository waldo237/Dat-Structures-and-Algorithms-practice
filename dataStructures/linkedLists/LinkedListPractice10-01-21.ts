(function singlyLinkListNamespace() {

    class SinglyLinkedListNode<T> {
        data: T | null;
        next: SinglyLinkedListNode<T> | null;
        constructor(data: T | null) {
            this.data = data;
            this.next = null;
        }
    }

    class SinglyLinkedList<T> {
        head: SinglyLinkedListNode<T> | null = null;
        size: number = 0;

        /**
         * insert
         */
        public insert(data: T): void {
            const newNode = new SinglyLinkedListNode(data);
            if (!this.head) {
                this.head = newNode;
                this.size++;
            } else {
                newNode.next = this.head;
                this.head = newNode;
                this.size++;
            }
        }

        /**
         * find
         */
        public find(value: T): T | null {
            let result: T | null = null;
            if (!this.head) {
                return result;
            } else {
                let currentNode: SinglyLinkedListNode<T> | null = this.head;
                if (currentNode.data == value) {
                    result = this.head.data;
                    return result;
                } else {
                    while (currentNode) {
                        if (currentNode.data == value) {
                            result = currentNode.data;
                            break;
                        } else {
                            currentNode = currentNode.next;
                        }
                    }
                }
            }
            return result;
        }

        /**
         * remove
         */
        public remove(value: T): boolean {
            let result: boolean = false;
            if (!this.head) {
                return result;
            } else {
                let currentNode: SinglyLinkedListNode<T> | null = this.head;
                if (currentNode.data == value) {
                    this.head = currentNode.next;
                    this.size--;
                    result = true;
                    return result;
                } else {
                    while (currentNode) {
                        if (currentNode.next?.data == value) {
                            currentNode.next = currentNode.next.next;
                            this.size--;
                            result = true;
                            break;
                        } else {
                            currentNode = currentNode.next;
                        }
                    }
                }
            }
            return result;
        }

        /**
         * removeHead
         */
        public removeHead(): boolean {
            let result: boolean = false;
            if (!this.head) {
                return result;
            } else {
                let currentNode: SinglyLinkedListNode<T> | null = this.head;
                this.head = currentNode.next;
                this.size--;
                result = true;
                return result;
            }
        }
    }

    (function name() {
        const sll1 = new SinglyLinkedList();
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
        console.log(JSON.stringify(sll1))
        console.log(sll1.find('doce'));
    })()

})();

(function DoublyLinkListNamespace() {

    class DoublyLinkedListNode<T> {
        data: T | null;
        prev: DoublyLinkedListNode<T> | null = null;
        next: DoublyLinkedListNode<T> | null = null;
        constructor(data: T | null) {
            this.data = data;
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

        /**
         * append
         */
        public append(data: T | null): void {
            const newNode = new DoublyLinkedListNode(data);

            if (!this.tail) {
                this.head = newNode;
                this.tail = this.head;
                this.size++
            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
                this.size++
            }
        }

        /**
         * prepend
         */
        public prepend(data: T) {
            const newNode = new DoublyLinkedListNode(data);
            if (!this.head) {
                this.head = newNode;
                this.tail = this.head;
                this.size++;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
                this.size++;
            }
        }

        /**
         * print
         */
        public print(): void {
            let currentNode = this.head;
            while (currentNode) {
                console.log(currentNode.data)
                currentNode = currentNode.next;
            }
        }
        /**
         * findStartingHead
          */
        public findStartingHead(value: T): Array<T> | null {
            const results: Array<T> = []
            if (!this.head) {
                return null;
            }
            let currentNode: DoublyLinkedListNode<T> | null = this.head;
            while (currentNode) {
                if (currentNode.data == value) {
                    results.push(currentNode.data);
                }
                currentNode = currentNode.next;
            }
            return results.length ? results : null;
        }
        /**
         * remove
         */
        public remove(value: T): boolean {
            let result: boolean = false;

            // the list is empty
            if (!this.head) {
                return result;
            }
            // if it's the last node
            if(this.head == this.tail){
                this.head = null;
                this.tail = null;
                result = true;
                this.size--;
                return result;
            }
            
            
            // if head is to be deleted
            if (this.head.data === value) {
                this.head = this.head.next;
                this.head!.prev = null;
                result = true;
                this.size--;
                
            }
            // if head is to be deleted
            if (this.tail?.data === value) {
                this.tail = this.tail.prev;
                this.tail!.next = null;
                result = true;
                this.size--;
            }
            
            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.data == value) {
                    if (!currentNode.next) { 
                        this.tail = this.tail!.prev;
                    };
         
                    currentNode.next!.prev = currentNode.prev;
                    currentNode.prev!.next = currentNode.next;
                    result = true;
                    this.size--;
                }
                currentNode = currentNode.next;
                
            }
            return result;
        }
        
    }
    
    (function namespace2() {
        const dll1 = new DoublyLinkedList();
        dll1.append('primero');
        dll1.append('segundo');
        dll1.append('tercero');
        console.log('removing', dll1.remove('segundo'));
        console.log('removing', dll1.remove('primero'));
        console.log('removing', dll1.remove('tercero'));
        dll1.print()

        console.log(dll1.findStartingHead('c'))
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
    })()










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

}())


