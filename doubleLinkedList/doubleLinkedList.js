class Node {
    constructor(data, previous, next) {
        this.data = data;
        this.previous = previous;
        this.next = next;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(data) {
        const node = new Node(data);
        if (this.head) {
            this.head.previous = node;
        }
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    append(data) {
      const node = new Node(data, this.head);
      if(!this.head){
        this.head = node;
        this.tail = node;
        return this;
    }

    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    }
}