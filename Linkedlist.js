import Comparator from './comparator'

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    print(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

export default class LinkedList {

    constructor(comparatorFunction) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFunction);
    }

    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        return this;
    }

    append(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
        return this;
    }


    delete(value) {
        if (!this.head) {
            return null;
        }
        let deletedNode = null;

        while (this.head && this.compare.equal(this.head.value, value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (this.compare.equal(currentNode.next.value, value)) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }
        return deletedNode;
    }



    find({value=undefined, callback=undefined}){
        if(!this.head){
            return null;
        }
        let currentNode = this.head;

        while(currentNode){
            if(callback &&callback(currentNode.value)){
                return currentNode;
            }
            if(value !==undefined && this.compare.equal(currentNode.value, value)){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}


const list = new LinkedList();
