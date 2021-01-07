class Node {
    constructor(data=null, next=null, prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){
        const node = new Node(data);
        if(!this.tail){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    prepend(data){
        const node = new Node(data, this.head);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }

        this.head.prev = node;
        this.head = node;

    }
    delete(data){
        let deletedNode = null
        if(!this.head) return deletedNode;
        if(data && this.head.data === data){
            deletedNode = this.head;
            this.head.next.prev = null;
        }

    }
}