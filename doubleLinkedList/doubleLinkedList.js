class Node {
    constructor(data, next, previous) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    isEqual(a, b) {
        function compatator(a, b) {
            if (a === b) return 0;
            return (a < b) ? -1 : 1;
        }
        return compatator === 0;
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
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }

        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
        return this;
    }

    delete(data) {
        if (!this.head) return null;

        let deletedNode = null;
        let currrentNode = this.head;

        while (currrentNode) {
            if (this.isEqual(currrentNode.data, data)) {
                deletedNode = currrentNode;
                if (deletedNode === this.head) {
                    this.head = deletedNode.next;
                    if (this.head) {
                        this.head.previous = null;
                    }
                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    this.tail = deletedNode.previous;
                    this.tail.next = null;
                } else {
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;
                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;

                }
            }
            currrentNode = currrentNode.next;
        }
        return deletedNode;
    }

    find(value) {
        if (!this.head) return null;
        const { isEqual } = this;
        let currentNode = this.head;
        while (currentNode) {
            if (isEqual(currentNode.data, value)) return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }
    deleteFirst(){
        if(!this.head) return null;

        const deletedNode = this.head;

        if(this.head.next){
            this.head = this.head.next;
            this.head.previous = null;
        }else{
            this.head = null;
            this.tail = null;
        }
        return deletedNode;
    }
    deleteLast(){
        if(!this.tail) return null;

        const deletedTail = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;

            return deletedTail;
        }
        this.tail = this.tail.previous;
        this.tail.next = null;

    }

    reverse(){
        let currentNode = this.head;
        let previousNode = null;
        let nextNode = null;


        while(currentNode){
            previousNode = currentNode.previous;
            nextNode = currentNode.next;

            currentNode.next = previousNode;
            currentNode.previous = nextNode;

            previousNode = currentNode;
            currentNode = nextNode;

            this.tail = this.head;
            this.head = previousNode;
            return this;
        }
    }

    toArray(){
        const nodes = [];
        let currrentNode = this.head;

        while(currrentNode){
            nodes.push(currrentNode);
            currrentNode = currrentNode.next;
        }
        return nodes;
    }
}

const list = new DoubleLinkedList();
list.append(2);
list.append(10);
list.append(20);
list.prepend(3);
list.append(20);
list.append(10);
list.prepend(6);
// list.delete(6);
// list.delete(3);
list.prepend(3);
// list.deleteLast();

console.log(list);