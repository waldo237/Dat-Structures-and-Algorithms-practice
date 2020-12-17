import Comparator from './comparator'

class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

    print(callback){
        return callback ? callback(this.value): `${this.value}`;
    }
}

export default class LinkedList {

    constructor(comparatorFunction){
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFunction);
    }

    prepend(value){
        const node = new Node(value, this.head);
        this.head = node;

        if(!this.tail){
            this.tail = node;
        }
    }
}