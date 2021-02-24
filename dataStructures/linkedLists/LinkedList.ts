class LinkedListNode<T> {
    public data: T | null;
    public next: LinkedListNode<T> | null
    constructor(data: T | null, next: LinkedListNode<T> | null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList<T>{
    head: LinkedListNode<T> | null = null;
    tail: LinkedListNode<T> | null = null;
    constructor() {

    }

    /**
     * append
     * @param {T} data
     */
    public append(data: T): void {
        const newNode = new LinkedListNode(data, null);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * prepend
     * @param {T} data
     */
    public prepend(data: T): void {
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }

    }

    /**
     * search
     * @param {T} value
     */
    public search(value: T): Array<T> {
        let currentNode = this.head, results: Array<T> = [];

        while (currentNode) {
            if (currentNode.data === value) {
                results.push(currentNode.data);
            }
            currentNode = currentNode.next;
        }
        return results;
    }

    /**
     * delete
     * @param {T} value
     */
    public delete(value: T) {
        let currentNode: LinkedListNode<T> | null = this.head,
         results: Array<T> = [];

        if (!this.head) {
            return null
        }

        if (currentNode?.data === value) {
            results.push(currentNode.data)
            this.head = currentNode.next;
        }

        while (currentNode) {
            if (currentNode.next?.data === value) {
                currentNode.next = currentNode.next?.next;
                
                // if(!currentNode.next?.next && currentNode.next === this.tail){
                //     this.tail =   null;
                // }
            }
            
            currentNode = currentNode.next;
            
        }
        return results;
    }
    
    public print(): void {
        let currentNode:LinkedListNode<T> | null = this.head;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

}

(function namespace() {
    const list = new LinkedList<string>();
    list.append('uno')
    list.append('dos')
    list.append('dos')
    list.append('tres')
    list.append('cuatro')
    list.append('cinco')
    list.prepend('zero');
    list.delete('uno')
    // list.delete('dos')
    // list.delete('dos')
    list.delete('tres')
    list.delete('cuatro')
    list.delete('cinco')
    list.delete('zero')


    // Promise.resolve(console.log(list.delete('zero')))
    console.log(JSON.stringify(list))
    console.log(list.print())
        ;

})()