class Node {
    constructor(data, next=null, prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.tail){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    prepend(data){
     const newNode = new Node(data);
     if(!this.head){
         this.head = newNode;
         this.tail = newNode;
     }else{
         this.head.prev = newNode;
         newNode.next = this.head;
         this.head = newNode;
     }

    }

    removeFirst(){
        if(!this.head){
            return null;
        }else{
            const removedNode = this.head;
            if(this.head === this.tail){
                this.head = null;
                this.tail = null;
            }
          if(this.head) {
            this.head = this.head.next;
            this.head.prev = null;
          } 
            return removedNode;
        }
    }

    removeLast(){
        if(!this.tail){
            return null;
        }else{
            const removedNode = this.tail;
            if(this.head === this.tail){
                this.tail = this.tail = null;
            }
            if(this.tail) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedNode;
        }
    }
    remove(data){
        if(!this.head){
            return null;
        }else{
            let currentNode = this.head;
            let removedNodes = [];

            if(this.head.data === data){
                this.head = currentNode.next;
                this.head.prev = null;
            }
            while(currentNode){
                if(currentNode.data ===data){
                    
                  if(currentNode.next)  currentNode.next.prev = currentNode.prev;
                  if(currentNode.prev)  currentNode.prev.next = currentNode.next;
                  removedNodes.push({deletedNode: currentNode});
                }
                currentNode = currentNode.next;
            }
            return removedNodes;
        }
        this.print();
    }
    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}


const list = new DoublyLinkList();

list.append('elephat');
list.append('giraffe');
list.append('lion');
list.prepend('ant');
list.prepend('man');
console.log(list.remove('ant'));
console.log(list.remove('giraffe'));



list.print();