class Queue<T> {
    items: Array<T>;
    constructor() {
        this.items = []
    }

    public enqueue(item: T) {
        this.items.push(item);
    }
    public dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.items.shift();
        }
    }

    public peek() {
        if (!this.isEmpty()) return this.items[0];
    }

    public isEmpty() {
        return this.items.length === 0;
    }

    public print() {
        this.items.forEach(item => console.log(item))
    }
}

// creating object for queue class 
var queue = new Queue<number>();


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
