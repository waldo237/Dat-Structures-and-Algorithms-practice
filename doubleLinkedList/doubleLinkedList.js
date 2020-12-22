class Node {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }


    }
    prepend(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }



    print() {
        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.next;
        }
    }
}

const list = new DoubleLinkedList();

list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.prepend('z');
list.prepend('y');
list.print();

console.log(list)