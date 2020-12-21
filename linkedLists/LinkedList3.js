class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    static comparator(a, b) {
        if (a === b) return 0;
        return (a < b) ? -1 : 1;
    }
    isEqual(a, b) {
        return comparator(a, b) === 0;
    }

    append(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }

    prepend(data){
        const node  = new Node(data, this.head);

        this.head = node;

        if(!this.tail){
            this.tail = node;
        }
        return this;
    }
}