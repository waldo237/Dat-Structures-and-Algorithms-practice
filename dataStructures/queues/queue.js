class Queue {
    constructor() {
        this.items = [];

    }

    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.items.shift();
        }
    }

    peek() {
        if (!this.isEmpty()) return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        this.items.forEach(item => console.log(item))
    }
}

// creating object for queue class 
var queue = new Queue(); 
              
  
// Testing dequeue and pop on an empty queue 
// returns Underflow 
console.log(queue.dequeue()); 
  
// returns true 
console.log(queue.isEmpty()); 
  
// Adding elements to the queue 
// queue contains [10, 20, 30, 40, 50] 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
  
// returns 10 
console.log(queue.peek()); 
  
// removes 10 from the queue 
// queue contains [20, 30, 40, 50, 60] 
console.log(queue.dequeue()); 
  
// returns 20 
console.log(queue.peek()); 
  
// removes 20 
// queue contains [30, 40, 50, 60] 
console.log(queue.dequeue()); 
queue.print();
  