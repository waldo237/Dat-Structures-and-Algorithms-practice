
class LinkedListNode {
    public value: number | null = null;
    public next: LinkedListNode | null = null;

    constructor(value: number, next: LinkedListNode | null) {
        this.value = value;
        this.next = next;
    }
}

interface ILinkedList {
    prepend(data: number): LinkedListNode;
    append(data: number): LinkedListNode;
    delete(data: number): LinkedListNode;
    deleteHead(data: number): LinkedListNode;
    deleteTail(data: number): LinkedListNode;
    reverse(): void;
    find(data: number): LinkedListNode;

}

class LinkedList implements ILinkedList {
    private head: LinkedListNode  = null;
    private tail: LinkedListNode  = null;


    public prepend(data: number): LinkedListNode {
        const node = new LinkedListNode(data, this.head);
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        return this.head;
    }

    public append(data: number): LinkedListNode {
        const node = new LinkedListNode(data, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return node;
        }

        this.tail.next = node;
        this.tail = node;
        return node;
    }


    public delete(value: number): LinkedListNode | null {
        if (!this.head) {

        }
        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
        return deletedNode;
    }



    public find(data: T): LinkedListNode | null {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;

        while (currentNode) {

            if (data !== undefined && currentNode.value === data) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
        return null;
    }

    public deleteTail(): LinkedListNode {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedTail;
    }

    public deleteHead(): LinkedListNode {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }

    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;
        return this;
    }
}

const list = new LinkedList();
list.append(2);
list.prepend(3);
list.append(10);
list.append(20);

console.log(list);



exports.LinkedList = LinkedList