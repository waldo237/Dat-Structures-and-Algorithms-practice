const { promisify } = require('util')
class Node {
    constructor(value) {
        this.value = value;
        this.rightChild = null;
        this.leftChild = null;
    }
}

class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    insert(currentNode, newValue) {
        if (currentNode === null) {
            currentNode = new Node(newValue);
        } else if (newValue < currentNode.value) {
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue)
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue)
        }
        return currentNode;
    }

    insertBST(newValue) {
        if (this.root == null) {
            this.root = new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
    }
    preOrderPrint(currentNode) {
        if (currentNode) {
            console.log(currentNode.value);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }
    inOrderPrint(currentNode) {
        if (currentNode) {
            this.inOrderPrint(currentNode.leftChild)
            console.log(currentNode.value)
            this.inOrderPrint(currentNode.rightChild)
        }
    }
    postOrderPrint(currentNode) {
        if (currentNode) {
            this.postOrderPrint(currentNode.leftChild);
            this.postOrderPrint(currentNode.rightChild);
            console.log(currentNode.value);
        }
    }
    search(currentNode, value) {
        if (currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            } else if (value < currentNode.value) {
                return this.search(currentNode.leftChild, value);
            } else {
                return this.search(currentNode.rightChild, value);
            }
        } else {
            return null;
        }
    }
    searchBST(value) {
        return this.search(this.root, value);
    }

    delete(currentNode, value) {
        if (currentNode === null) return false;

        let parentNode;
        while (currentNode && currentNode.value !== value) {
            parentNode = currentNode;
            if (value < currentNode.value) {
                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;
            }
        }

        if (currentNode === null) {
            return false;
        } else if (currentNode.leftChild === null && currentNode.rightChild === null) {
            if (currentNode.value === this.root.value) {
                this.root = null;
                return true;
            } else if (currentNode.value < parentNode.value) {
                parent.leftChild = null;
                return true;
            } else {
                parentNode.rightChild = null;
                return true;
            }
        } else if (currentNode.rightChild === null) {
            if (currentNode.value == this.root.value) {
                this.root = currentNode.leftChild;
                return true;
            } else if (currentNode.leftChild.value < parentNode.value) {
                parentNode.leftChild = currentNode.leftChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.leftChild;
                return true;
            }
        } else if (currentNode.leftChild === null) {
            if (currentNode.value === this.root.value) {
                this.root = currentNode.rightChild;
                return true;
            } else if (currentNode.rightChild.value < parentNode.value) {
                parentNode.leftChild = currentNode.rightChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.rightChild;
                return true;
            }
        } else {
            let minRight = currentNode.rightChild;
            while (minRight.leftChild !== null) {
                minRight = minRight.leftChild;
            }
            const temp = minRight.value;
            this.delete(this.root, minRight.value);
            currentNode.value = temp;
            return true;
        }
    }
}