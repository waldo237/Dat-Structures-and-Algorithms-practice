class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this._root = null;
    }

    traversePreOrder() {
        function traversePreOrderHelper(node) {
            if (!node) return;
            console.log(node.value);
            traversePreOrder(node.left);
            traversePreOrder(node.right);
        }
        traversePreOrderHelper(this._root);
    }

    traverseInOrder() {
        function traverseInOrderHelper(node) {
            if (!node) return;
            traverseInOrderHelper(node.left);
            console.log(node.value);
            traverseInOrderHelper(node.right);
        }
        traverseInOrderHelper(this._root);
    }

    traversePostOrder = function () {
        function traversePostOrderHelper(node) {
            if (node.left) traversePostOrderHelper(node.left);
            if (node.right) traversePostOrderHelper(node.right);
            console.log(node.value);
        }
        traversePostOrderHelper(this._root);
    }

    traverseLevelOrder() {
        // Breath first search
        var root = this._root,
            queue = [];

        if (!root)
            return;
        queue.push(root);

        while (queue.length) {
            var temp = queue.shift();
            console.log(temp.value);

            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
        }
    }
}