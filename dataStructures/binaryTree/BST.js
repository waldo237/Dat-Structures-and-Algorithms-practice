
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    insert(value) {
        let thisNode = new TreeNode(value);

        if (!this._root) {
            this._root = thisNode;
        } else {
            let currentRoot = this._root;
            while (true) {
                if (currentRoot.value > value) {
                    if (currentRoot.left != null) {
                        currentRoot = currentRoot.left;
                    } else {
                        currentRoot.left = thisNode;
                        break;
                    }
                } else if (currentRoot.value < value) {
                    if (currentRoot.right != null) {
                        currentRoot = currentRoot.right;
                    } else {
                        currentRoot.right = thisNode;
                        break;
                    }
                } else {
                    break;
                }
            }
        }
    }

    remove(value) {

        return deleteRecursively(this._root, value);

        function deleteRecursively(root, value) {
            if (!root) {
                return null;
            } else if (value < root.value) {
                root.left = deleteRecursively(root.left, value);
            } else if (value > root.value) {
                root.right = deleteRecursively(root.right, value);
            } else {
                //no child
                if (!root.left && !root.right) {
                    return null; // case 1
                } else if (!root.left) { // case 2
                    root = root.right;
                    return root;
                } else if (!root.right) { // case 2
                    root = root.left;
                    return root;
                } else {
                    let temp = findMin(root.right); // case 3
                    root.value = temp.value;
                    root.right = deleteRecursively(root.right, temp.
                        value);
                    return root;
                }
            }
            return root;
        }
        function findMin(root) {
            while (root.left) {
                root = root.left;
            }
            return root;
        }
    }

    findNode (value) {
        let currentRoot = this._root,
            found = false;
        while (currentRoot) {
            if (currentRoot.value > value) {
                currentRoot = currentRoot.left;
            } else if (currentRoot.value < value) {
                currentRoot = currentRoot.right;
            } else {
                //we've found the node
                found = true;
                break;
            }
        }
        return found;
    }
}


const bst1 = new BinarySearchTree();
bst1.insert(5);
bst1.insert(3);
bst1.insert(4);
bst1.insert(2);
bst1.findNode(3); // true
bst1.insert(5); // false

bst1.insert(7); // false
bst1.insert(6); // false
bst1.insert(9); // false
console.log(bst1)