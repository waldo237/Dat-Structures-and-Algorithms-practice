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

    isEqual(a, b) {
       function comparator(a, b) {
           if (a === b) return 0;
           return (a < b) ? -1 : 1;
       }
        return comparator(a, b) === 0;
    }

    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }

    prepend(data) {
        const node = new Node(data, this.head);

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        return this;
    }

    delete(data) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.isEqual(this.head.data, data)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;
        while (currentNode && currentNode.next) {
            if (this.isEqual(currentNode.next.data, data)) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }
        if(this.tail && this.isEqual(this.tail.data, data)){
            this.tail = currentNode;
        }
        return deletedNode;
    }

    deleteLast() {
        let deletedNode = null;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedNode;
        }
        let currentNode = this.head;

        while(currentNode.next){
            if(!currentNode.next.next){
                currentNode.next = null;
            }else{
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedNode;
    }

    find(value){
        if(!this.head) return null;

        if(value && this.isEqual(this.head.data, value)) return this.head;
        if(value && this.isEqual(this.tail.data, value)) return this.tail;
        
        let currentNode = this.head
        
        while(currentNode){
            if(value && this.isEqual(currentNode.data, value)){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }
}
const list = new LinkedList();
list.append(2);
list.append(10);
list.append(20);
list.prepend(3);
list.append(10);
list.prepend(6);
list.delete(6);
list.delete(3);
// list.deleteLastValue();
// list.deleteLastValue();
// list.deleteLastValue();
// list.deleteLastValue();
// list.deleteLastValue();
console.log(list.head)
console.log('found node:', list.find(3));