
class Node {

    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
        let deletedNode = null;
        if (!this.head) {
            return deletedNode;
        }
        if (this.head.data === data) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;

        while (currentNode.next) {
            if (currentNode.next.data === data) {
                deletedNode = currentNode;
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }
        return deletedNode;
    }

    print() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log('\n')
    }
    find(data){
        if(data && this.head === data) return this.head;
        if(data && this.tail === data) return this.tail;

        let currentNode = this.head;

        while(currentNode){
            if(currentNode.data === data) return currentNode;

            currentNode = currentNode.next;
        }
    }

    deleteLast(){
        let deletedNode = null;
        if(!this.head){
            return deletedNode;
        }
        if(this.head === this.tail){
            deletedNode = this.head;
            this.head = this.tail = null;
        }
        let currentNode = this.head; 
        while(currentNode){
            if(!currentNode.next.next){
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next
            }else{
                currentNode = currentNode.next;
            }
        }
        return deletedNode;
    }
}


const list = new SinglyLinkedList();

list.append('a')
list.append('b')
list.append('c')
list.append('d')
list.prepend('z')
list.print();
console.log(list.find('b'));
list.delete('z')
list.print();
list.delete('b')
list.print();

