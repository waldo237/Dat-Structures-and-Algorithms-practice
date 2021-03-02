(function namespaceBST() {

    class bstNode<T> {
        public value: T;
        right: bstNode<T> | null;
        left: bstNode<T> | null;
        constructor(value: T) {
            this.value = value;
            this.right = null;
            this.left = null;
        }
    }

    class BinaryTree<T> {
        public _root: bstNode<T> | null;
        constructor() {
            this._root = null;
        }

        public traverseInOrder(): void {
            traverseInOrderHelper(this._root);

            function traverseInOrderHelper(node: bstNode<T> | null) {
                if (!node)
                    return;
                traverseInOrderHelper(node.left);
                console.log(node.value);
                traverseInOrderHelper(node.right);
            }
        }

        public traverseInOrderIterative(): void {
            let current: bstNode<T> | null | undefined = this._root,
                s: Array<bstNode<T> | null> = [],
                done = false;

            while (!done) {
                // Reach the left most Node of the current Node
                if (current != null) {
                    // Place pointer to a tree node on the stack
                    // before traversing the node's left subtree
                    s.push(current);
                    current = current.left;
                } else {
                    if (s.length) {
                        current = s.pop();
                        console.log(current?.value);
                        current = current!.right;
                    } else {
                        done = true;
                    }
                }
            }
        }

        public traversePostOrder(): void {
            traversePostOrderHelper(this._root);

            function traversePostOrderHelper(node: bstNode<T> | null) {
                if (node?.left)
                    traversePostOrderHelper(node.left);
                if (node?.right)
                    traversePostOrderHelper(node.right);
                console.log(node?.value);
            }
        }

        public traversePostOrderIterative(): void {
            // Create two stacks
            var s1 = [],
                s2 = [];

            // Push root to first stack
            s1.push(this._root);

            //# Run while first stack is not empty
            while (s1.length) {
                // Pop an item from s1 and append it to s2
                var node = s1.pop();
                s2.push(node);

                // Push left and right children of removed item to s1
                if (node?.left)
                    s1.push(node.left);
                if (node?.right)
                    s1.push(node.right);
            }
            // Print all eleements of second stack
            while (s2.length) {
                var node = s2.pop();
                console.log(node?.value);
            }
        }

        public traverseLevelOrder(): void {
            // Breath first search
            var root = this._root,
                queue = [];

            if (!root)
                return;
            queue.push(root);

            while (queue.length) {
                let temp = queue.shift();
                console.log(temp?.value);
                if (temp?.left)
                    queue.push(temp.left);
                if (temp?.right)
                    queue.push(temp.right);
            }
        }
    }


    class BinarySearchTree<T> {
        public _root: bstNode<T> | null;
        constructor() {
            this._root = null;
        }
        public insert(value: T): void {
            var thisNode = {
                left: null,
                right: null,
                value: value
            };
            if (!this._root) {
                //if there is no root value yet
                this._root = thisNode;
            } else {
                //loop traverse until
                var currentRoot = this._root;
                while (true) {
                    if (currentRoot.value > value) {
                        //let's increment if it's not a null and insert if it is a null
                        if (currentRoot.left != null) {
                            currentRoot = currentRoot.left;
                        } else {
                            currentRoot.left = thisNode;
                            break;
                        }
                    } else if (currentRoot.value < value) {
                        //if bigger than current, put it on the right
                        //let's increment if it's not a null and insert if it is a null
                        if (currentRoot.right != null) {
                            currentRoot = currentRoot.right;
                        } else {
                            currentRoot.right = thisNode;
                            break;
                        }
                    } else {
                        //case that both are the same
                        break;
                    }
                }
            }
        }
        public remove(value: T) {

            return deleteRecursively(this._root, value);

            function deleteRecursively(root: bstNode<T> | null, value: T) {
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
                        var temp = findMin(root.right); // case 3
                        root.value = temp!.value;
                        root.right = deleteRecursively(root.right, temp!.value);
                        return root;
                    }
                }
                return root;
            }

            function findMin(root: bstNode<T> | null) {
                while (root?.left) {
                    root = root.left;
                }
                return root;
            }
        }

        public findNode(value: T): boolean {
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
    var bst1 = new BinarySearchTree();
    bst1.insert(1);
    bst1.insert(3);
    bst1.insert(2);
    bst1.findNode(3); // true
    bst1.findNode(5); // false



    class AVLTree<T> {
        public left: AVLTree<T> | null;
        public right: AVLTree<T> | null;
        public value: T;
        public depth: number;

        constructor(value: T) {
            this.left = null;
            this.right = null;
            this.value = value;
            this.depth = 1;

        }
        public setDepthBasedOnChildren() {
            if (!this.value) {
                this.depth = 1;
            }

            if (this.left != null) {
                this.depth = this.left.depth + 1;
            }
            if (this.right != null && this.depth <= this.right.depth) {
                this.depth = this.right.depth + 1;
            }
        }

        public rotateLL(): void {

            let valueBefore = this.value;
            let rightBefore = this.right;
            this.value = this.left!.value;

            this.right = this.left;
            this.left = this.left!.left;
            this.right!.left = this.right!.right;
            this.right!.right = rightBefore;
            this.right!.value = valueBefore;

            this.right!.setDepthBasedOnChildren();
            this.setDepthBasedOnChildren();
        }

        public rotateRR(): void {
            // the right side is too long => rotate from the right (_not_ rightwards)
            var valueBefore = this.value;
            var leftBefore = this.left;
            this.value = this.right!.value;

            this.left = this.right;
            this.right = this.right!.right;
            this.left!.right = this.left!.left;
            this.left!.left = leftBefore;
            this.left!.value = valueBefore;

            this.left!.setDepthBasedOnChildren();
            this.setDepthBasedOnChildren();
        }

        public balance(): void {
            var ldepth = this.left == null ? 0 : this.left.depth;
            var rdepth = this.right == null ? 0 : this.right.depth;

            if (ldepth > rdepth + 1) {
                // LR or LL rotation
                var lldepth = this.left?.left == null ? 0 : this.left.left.depth;
                var lrdepth = this.left?.right == null ? 0 : this.left?.right.depth;

                if (lldepth < lrdepth) {
                    // LR rotation consists of a RR rotation of the left child
                    this.left?.rotateRR();
                    // plus a LL rotation of this node, which happens anyway
                }
                this.rotateLL();
            } else if (ldepth + 1 < rdepth) {
                // RR or RL rorarion
                var rrdepth = this.right?.right == null ? 0 : this.right.right.depth;
                var rldepth = this.right?.left == null ? 0 : this.right.left.depth;

                if (rldepth > rrdepth) {
                    // RR rotation consists of a LL rotation of the right child
                    this.right?.rotateLL();
                    // plus a RR rotation of this node, which happens anyway
                }
                this.rotateRR();
            }
        }
        public insert(value: T): boolean {
            var childInserted = false;
            if (value == this.value) {
                return false; // should be all unique
            } else if (value < this.value) {
                if (this.left == null) {
                    this.left = new AVLTree(value);
                    childInserted = true;
                } else {
                    childInserted = this.left.insert(value);
                    if (childInserted == true) this.balance();
                }
            } else if (value > this.value) {
                if (this.right == null) {
                    this.right = new AVLTree(value);
                    childInserted = true;
                } else {
                    childInserted = this.right.insert(value);

                    if (childInserted == true) this.balance();
                }
            }
            if (childInserted == true) this.setDepthBasedOnChildren();
            return childInserted;
        }

        public remove(value: T) {
            return deleteRecursively(this, value);

            function deleteRecursively(root: AVLTree<T> | null, value: T) {
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
                    } else if (!root.left) {
                        root = root.right;
                        return root;
                    } else if (!root.right) {
                        root = root.left;
                        return root;
                    } else {
                        var temp = findMin(root.right);
                        root.value = temp!.value;
                        root.right = deleteRecursively(root.right, temp!.value);
                        return root;
                    }
                }
                root.setDepthBasedOnChildren(); // ONLY DIFFERENCE from the BST one
                return root;
            }

            function findMin(root: AVLTree<T> | null) {
                while (root?.left) root = root.left;
                return root;
            }
        }
    }


    var avlTest = new AVLTree(1);
    avlTest.insert(2);
    avlTest.insert(3);
    avlTest.insert(4);
    avlTest.insert(5);
    avlTest.insert(123);
    avlTest.insert(203);
    avlTest.insert(2222);
    console.log(avlTest);


})()