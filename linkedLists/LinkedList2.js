
class Node {
    /**
     * @param {number} value
     * @param {Node} next
     */
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

     equal(a, b) {
        function compare(value1, value2) {
            if (a === b) return 0;
            return a < b ? -1 : 1;
        }
        return compare(a, b) === 0;
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

    delete(value) {
        if (!this.head) {
            return null;
        }
        let deletedNode = null;
        while (this.head && this.equal(this.head.value, value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head
        while (currentNode && currentNode.next) {
            if (this.equal(currentNode.next.value, value)) {
                deletedNode = currentNode.next;
                currentNode = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

}

const list = new LinkedList();
list.append(2);
list.append(10);
list.append(20);
// list.delete(20)
list.prepend(3);
list.append(10);
list.prepend(6);
console.log(list.head.next.next.next)