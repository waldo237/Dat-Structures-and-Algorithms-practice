const {Comparator} =  require('./comparator');

interface LLNode {
        value:number;
        next: LLNode;
}
class LinkedListNode {
   public value:number;
    public next: LLNode;

    constructor(value:number, next:LLNode){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head:LLNode;
    tail: LLNode;

    constructor() {
        this.head = null;
        this.tail = null;
      
    }

    prepend(value:number) {
        const node:LLNode = new LinkedListNode(value, this.head);
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        return this;
    }

    append(value:number) {
        const node:LLNode = new LinkedListNode(value, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
        return this;
    }


    delete(value:number) {
        if (!this.head) {
            return null;
        }
        let deletedNode = null;

        while (this.head && this.head.value ===value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value===value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail.value===value) {
            this.tail = currentNode;
        }
        return deletedNode;
    }



    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;

        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }
            if (value !== undefined && currentNode.value===value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
        return null;
    }

    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return deletedTail;
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
        return deletedTail;
    }

    deleteHead(){
        if(!this.head){
            return null;
        }

        const deletedHead = this.head;

        if(this.head.next){
            this.head = this.head.next;
        }else{
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }

    reverse(){
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while(currentNode){
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

// console.log(list);



exports.LinkedList = LinkedList