const { rejects } = require('assert');
const { resolve } = require('path');
const readline = require('readline');
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
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    deleteHead() {
        if (!this.head) {
            return null;
        } else {
            let removedHead = this.head;

            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.previous = null;
            }
            return removedHead.value;
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        } else {
            let removedTail = this.tail;

            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.tail = this.tail.previous;
                this.tail.next = null;
            }
            return removedTail.value;
        }
    }

    delete(data) {
        if (!this.head) {
            return null;
        } else {
            let deletedNodes = [];
            let currentNode = this.head;

            if (this.head.data === data) {
                this.head = currentNode.next;
                return;
            }
            while (currentNode) {
                if (currentNode.data === data) {
                    if (currentNode.next) {
                        currentNode.next.previous = currentNode.previous;
                    }
                    if (currentNode.previous) currentNode.previous.next = currentNode.next;
                    return deletedNodes.push({ deletedNode: currentNode });
                }
                currentNode = currentNode.next;
            }
            return deletedNodes;
        }
    }

    search(data) {
        if (!this.head) {
            return null;
        } else {
            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.data === data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
            return null;
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

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.prepend(-1);
list.deleteHead();
list.deleteTail();
list.delete(1);

list.print()

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// const rlPromise = () => new Promise((resolve, reject)=>{
//     rl.question("what do you want to add", (input)=> resolve(list.append(input)) )

// })
// rlPromise()
// .then(()=>{
//     rl.question("letter to delete? ", function(letter) {
//         list.delete(letter);
//     rl.close();
//     });
// })

// rl.on("close", function() {
//     list.print();
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });
