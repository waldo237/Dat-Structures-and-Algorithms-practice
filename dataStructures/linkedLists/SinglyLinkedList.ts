
class SinglyLinkedListNode {
    data: number | string | null;
    next: SinglyLinkedListNode | null;
    constructor(data: number | string, next: SinglyLinkedListNode | null) {
        this.data = data;
        this.next = next;
    }
}


class SinglyLinkedList {
    head: SinglyLinkedListNode | null;
    tail: SinglyLinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public prepend(data: number | string): void {
        const node = new SinglyLinkedListNode(data, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    };

    public append(data: number | string): void {
        const node = new SinglyLinkedListNode(data, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        this.tail!.next = node;
        this.tail = node;
    };

    public find(data: number | string): SinglyLinkedListNode | null {
        if (!this.head) {
            return null;
        }
        let currentNode: SinglyLinkedListNode | null = this.head;

        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }
        return null;
    };

    public delete(data: number | string): SinglyLinkedListNode | null {
        if (!this.head) {
            return null;
        }
        let deletedNode: SinglyLinkedListNode | null = null;
        let currentNode: SinglyLinkedListNode | null = this.head;

        if (currentNode.data === data) {
            deletedNode = currentNode;
            this.head = currentNode.next;
            return deletedNode;
        }

        while (currentNode) {
            if (currentNode.next!.data === data) {
                deletedNode = currentNode.next;
                this.head!.next = currentNode.next!.next;
                return deletedNode;
            } else {
                currentNode = currentNode.next;
            }
        }
        return deletedNode;

    }


    public print(): void {
        let currentNode: SinglyLinkedListNode | null = this.head;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    public deleteTail(): SinglyLinkedListNode | null {
        let deletedNode: SinglyLinkedListNode | null = null;

        if (this.head === this.tail) {
            deletedNode = this.head;
            this.head = null;
            this.tail = null;
            return deletedNode
        }
        let currentNode: SinglyLinkedListNode | null = this.head;
        while (currentNode) {
            if (!currentNode.next!.next) {
                deletedNode = currentNode.next;
                currentNode.next = null;
            }
            currentNode = currentNode.next;
        }
        deletedNode = this.tail;
        this.tail = null;

        return deletedNode;
    }

    public deleteHead(): SinglyLinkedListNode | null {
        if (!this.head) return null;

        let deletedNode: SinglyLinkedListNode | null = this.head;
        this.head = this.head.next;
        return deletedNode;
    }

    public reverseList(): void {
        let next: SinglyLinkedListNode | null;
        let prev: SinglyLinkedListNode | null = null;
        let currentNode: SinglyLinkedListNode | null = this.head;

        while (currentNode) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        this.head = this.tail;
    }
}

const single = new SinglyLinkedList();

single.append('uno')
single.append('dos')
single.append('tres')
single.append('cuatro')
single.prepend('zero');
single.reverseList();
// single.deleteHead();
// single.deleteHead();
// single.deleteHead();
single.print();
// console.log("head", single.head)
// console.log("tail", single.tail)