class DoublyLinkedListNode<T> {
    data: T
    next: DoublyLinkedListNode<T> | null;
    prev: DoublyLinkedListNode<T> | null;

    constructor(data: T, next: DoublyLinkedListNode<T> | null, prev: DoublyLinkedListNode<T> | null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList<T>{

    head: DoublyLinkedListNode<T> | null = null;
    tail: DoublyLinkedListNode<T> | null = null;
    size: number = 0;
    constructor() {
        this.head;
        this.tail;
    }

    public append(data: T): void {
        const newNode = new DoublyLinkedListNode<T>(data, null, null);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.size++;
        }
    }

    public prepend(data: T): void {
        const newNode = new DoublyLinkedListNode<T>(data, null, null);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    public remove(data: T): DoublyLinkedListNode<T> | null {
        let deletedNode = null, currentNode = this.head;

        // If HEAD is going to be deleted...
        if (this.head?.data === data) {
            deletedNode = this.head;
            this.head = this.head.next;
            this.head!.prev = null;
            this.size--;
            return deletedNode;
        }
        // If tail is going to be deleted...
        if (this.tail?.data === data) {
            deletedNode = this.tail;
            this.tail = this.tail.prev;
            this.tail!.next = null;
            this.size--;
            return deletedNode;
        }

        while (currentNode) {
            if (currentNode?.data === data) {
                if (!currentNode.next) this.tail = this.tail!.prev
                currentNode!.next!.prev = currentNode.prev;
                currentNode!.prev!.next = currentNode.next;
                deletedNode = currentNode;
                this.size--;
            }
            currentNode = currentNode.next;
        }
        return deletedNode;
    }

    public reverse(): void {
        if (this.head) {
            let currentNode: DoublyLinkedListNode<T> | null = this.head, 
            temp: DoublyLinkedListNode<T> | null = null;;

            while (currentNode) {
                temp = currentNode.prev;
                currentNode.prev = currentNode.next;
                currentNode.next = temp;
                currentNode = currentNode.prev;
            }
            this.head = this.tail;
        }
    }
    public print(): void {
        let currentNode: DoublyLinkedListNode<T> | null;
        currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
   
    }
}

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

const list = new DoublyLinkedList<string>();
console.log('the size is', list.size)
list.append('uno')
console.log('the size is', list.size)
list.append('dos')
list.append('tres')
console.log('the size is', list.size)
list.append('cuatro')
list.prepend('zero')
// list.reverse()
console.log('the size is', list.size)
// list.removeFirst();
// list.removeFirst();
list.remove('zero')
console.log('the size is', list.size)

list.reverse();
list.print();

// console.log(list.tail)