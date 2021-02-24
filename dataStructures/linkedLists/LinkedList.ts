class LinkedListNode<T>{
    public next: LinkedListNode<T> | null;
    public data: T | null;

    constructor(data:T | null, next: LinkedListNode<T> | null = null) {
        this.next = next;
        this.data = data;
    }
}

class LinkedList <T>{
    public head:  LinkedListNode<T> | null;
    public tail:  LinkedListNode<T> | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    public append(data:T):void{
        const newNode = new LinkedListNode(data, null);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * @function prepend add a value to the beginning of the list
     * @param {T}data the value you want to add to the beginning
     */
    public prepend(data:T):void {
        const newNode = new LinkedListNode(data, this.head) //add the head to the next value
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
    }

    /**
     * search: finds the first value that is specified in the parameters
     * @param {T} value value that is being queried
     */
    public search(value:T):Array<T> | null {
        let currentNode = this.head, results:Array<T>=[];
        while (currentNode) {
            if(currentNode.data === value){
            results.push(currentNode.data);
            }
            currentNode = currentNode.next;
        }
        return results;
    }

    /**
     * delete
     * @param {T} value the data that needs to be deleted.
     * @returns {string} message indicating the results of the operation
     */
    public delete(value:T):string {
        let deletedData:Array<T> = [];
        if(!this.head) return `There are not values in the list`;
        
        if(this.head.data === value){
            if(this.head === this.tail){
                deletedData.push(this.head.data);
                this.head, this.tail = null;
            }else{
                deletedData.push(this.head.data);
                this.head = this.head.next;
            }
        }
    


        let currentNode = this.head;
        while (currentNode?.next) {

            if(currentNode?.next.data === value){
                deletedData.push(currentNode.next.data);
                currentNode.next =  currentNode.next.next;
                console.log(`this is a delete value: ${JSON.stringify(currentNode)}`)
                
                if(currentNode.next === this.tail){
                    
                    this.tail!.next= null;
                    this.tail = currentNode;
                    
                }
            }
            currentNode = currentNode.next;
          
        }

        return (deletedData.length)?`deleted values: ${deletedData.join(', ')}`:`${value} was not found in the list`;
    }

}

(function namespace() {
    const list = new LinkedList<number>();
    list.append(1)
    list.append(2)
    list.append(2)
    list.append(2)
    list.delete(2)
    console.log(list.delete(2));
    console.log(JSON.stringify(list));
    
})()