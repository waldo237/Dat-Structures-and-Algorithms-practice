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

    public removeFirst(): DoublyLinkedListNode<T> | null {
        if (!this.head) {
            return null;
        }
        let deletedNode: DoublyLinkedListNode<T> | null = this.head;
        if (this.head.next) {
            this.head.next.prev = this.head.prev;
            this.size--;
        }
        this.head = this.head.next;
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

 

const list = new DoublyLinkedList<string>();
console.log('the size is', list.size)
list.append('uno')
console.log('the size is', list.size)
list.append('dos')
list.append('tres')
console.log('the size is', list.size)
list.append('cuatro')
list.prepend('zero')

console.log('the size is', list.size)
list.removeFirst();
list.remove('zero')


list.reverse();
list.removeFirst();
list.removeFirst();
list.removeFirst();

console.log('the size is', list.size);
list.print();

// console.log(list.tail)