"use strict";
var BalanceFactor;
(function (BalanceFactor) {
    BalanceFactor[BalanceFactor["UNBALANCED_RIGHT"] = 1] = "UNBALANCED_RIGHT";
    BalanceFactor[BalanceFactor["SLIGHTLY_UNBALANCED_RIGHT"] = 2] = "SLIGHTLY_UNBALANCED_RIGHT";
    BalanceFactor[BalanceFactor["BALANCED"] = 3] = "BALANCED";
    BalanceFactor[BalanceFactor["SLIGHTLY_UNBALANCED_LEFT"] = 4] = "SLIGHTLY_UNBALANCED_LEFT";
    BalanceFactor[BalanceFactor["UNBALANCED_LEFT"] = 5] = "UNBALANCED_LEFT";
})(BalanceFactor || (BalanceFactor = {}));
var AVLNode = /** @class */ (function () {
    function AVLNode(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    return AVLNode;
}());
var AVLTree = /** @class */ (function () {
    function AVLTree() {
        this.root = null;
    }
    AVLTree.prototype.getNodeHeight = function (node) {
        if (node === null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
    };
    AVLTree.prototype.rotationLL = function (node) {
        var temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    };
    AVLTree.prototype.rotationRR = function (node) {
        var temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    };
    AVLTree.prototype.rotationLR = function (node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    };
    AVLTree.prototype.rotationRL = function (node) {
        node.right = this.rotationRR(node.right);
        return this.rotationRR(node);
    };
    AVLTree.prototype.getBalanceFactor = function (node) {
        var heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    };
    AVLTree.prototype.insert = function (key) {
        this.root = this.insertNode(this.root, key);
    };
    AVLTree.prototype.insertNode = function (node, key) {
        if (node === null) {
            return new AVLNode(key);
        }
        else if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        }
        else if (key > node.key) {
            node.right = this.insertNode(node.right, key);
        }
        else {
            return node; //duplicate
        }
        // verify if tree is balanced
        var balanceState = this.getBalanceFactor(node);
        if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
            if (key < node.left.key) {
                node = this.rotationLL(node);
            }
            else {
                return this.rotationLR(node);
            }
        }
        if (balanceState === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
            if (key > node.right.key) {
                node = this.rotationRR(node);
            }
            else {
                return this.rotationRL(node);
            }
        }
        return node;
    };
    AVLTree.prototype.removeNode = function (node, key) {
        if (node === null)
            return null;
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
        }
        else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
        }
        else {
            // node is the node to be deleted
            if (node.left === null && node.right === null) {
                node = null;
            }
            else if (node.left == null && node.right != null) {
                node = node.right;
            }
            else if (node.left != null && node.right == null) {
                node = node.left;
            }
            else {
                // node has 2 children, get the in-order successor
                var inOrderSuccessor = this.minNode(node.right);
                node.key = inOrderSuccessor.key;
                node.right = this.removeNode(node.right, inOrderSuccessor.key);
            }
            if (node === null) {
                return node;
            }
            var balanceState = this.getBalanceFactor(node);
            if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
                if (this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
                    this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                    return this.rotationLL(node);
                }
                if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                    return this.rotationLR(node.left);
                }
            }
            if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
                if (this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
                    this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                    return this.rotationRR(node);
                }
                if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                    return this.rotationRL(node.right);
                }
            }
            return node;
        }
    };
    AVLTree.prototype.minNode = function (node) {
        var current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    };
    return AVLTree;
}());
