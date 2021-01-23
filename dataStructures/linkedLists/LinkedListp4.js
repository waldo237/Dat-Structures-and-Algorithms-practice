class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
        return this;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    remove(data){
        if(!this.head){
            return null;
        }
        let deletedNode = null;
        let currentValue = this.head;
        if(this.head.data === data) {
            deletedNode = this.head
            this.head = this.head.next;
        }
        while(currentValue && currentValue.next){
            if(currentValue.next.data === data){
                deletedNode =  currentValue.next;
                currentValue.next = currentValue.next.next;
            }else{
                currentValue = currentValue.next;
            }
        }
        if(this.tail && this.tail.data === data){
            this.tail = currentValue;
        }
        return deletedNode;
    }
    removeHead(){
        let deletedNode = null;
        if(!this.head){
            return null
        }
        deletedNode = this.head;
        this.head = this.head.next;
        return deletedNode;
        
    }
    removeTail(){
        let deletedNode = null;
        if(this.head === this.tail){
            this.head = null
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
    find(data){
        if(data=== undefined) return null;
        if(!this.head) return null;

        if(this.head.data === data) return this.head;
        if(this.tail.data === data) return this.tail;

       let currentNode = this.head;
        while(currentNode){
            if(currentNode.data === data){
                return currentNode;
            }else{
                currentNode = currentNode.next;
            }
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
// list.remove(6);
// list.remove(3);
list.removeTail();
list.removeHead();
console.log(list.head)
// console.log('found node:', list.find(3));