class Stack<T> {
  items: Array<T>;
  top: T | null = null;
  constructor() {
    this.items = [];
    this.top = null;
  }

  peek() {
    if (!this.items.length) return null;
    return this.top;
  }

  clear() {
    if (!this.items.length) return null;
    this.items = [];
  }

  pop() {
    if (!this.items.length) {
      return null;
    } else {
      if (this.items.length === 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    }
  }

  push(data: T) {
    this.items.push(data);
    this.top = data;
  }

  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    this.items.forEach((elem, i) =>
      console.log(`element number ${i + 1} =>`, elem)
    );
  }
}

const stack = new Stack<number>();
stack.push(4);
stack.push(2);
stack.push(5);
stack.push(6);
stack.push(7);
stack.pop();
stack.print();
console.log("length:", stack.size());
console.log("peek:", stack.peek());
stack.pop();
console.log("length:", stack.size());
console.log("peek:", stack.peek());
