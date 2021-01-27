

interface ILinkedListNode{
    value:number |null,
    next:ILinkedListNode |null
}
class LinkedListNode2 implements ILinkedListNode{
    /**
     * @param {number} value
     * @param {Node} next
     */
    public value:number;
    public next:LinkedListNode2
    constructor(value:number, next:LinkedListNode2) {
        this.value = value;
        this.next = next ||null;
    }
}

class LinkedList2 {
    private head:LinkedListNode2 |null;
    private tail:LinkedListNode2 |null;
    constructor() {
        this.head = null;
        this.tail = null;
    }


    append(data:number): LinkedList2{
        const node = new LinkedListNode2(data, this.head);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }

    prepend(data:number) {
        const node = new LinkedListNode2(data, this.head);
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

        /*if the data to be deleted is in the head, 
        point the head to the next node
        */
        while (this.head && this.equal(this.head.value, data)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        /*if the data to be deleted is in the next node, 
       point the next node to the one next to it.
       */
        let currentNode = this.head;
        while (currentNode && currentNode.next) {
            if (this.equal(currentNode.next.value, data)) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.equal(this.tail.value, data)) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    deleteLastValue() {
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

    deleteFirstValue(){
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

    find(value = undefined) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && this.equal(currentNode.value, value)) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

}

const list = new LinkedList();
list.append(2);
list.append(10);
list.append(20);
list.prepend(3);
list.append(10);
list.prepend(6);
list.deleteLastValue();
list.deleteLastValue();
list.deleteLastValue();
list.deleteLastValue();
list.deleteLastValue();
console.log(list.head)
console.log('found node:', list.find(3));
