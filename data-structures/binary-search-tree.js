"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var node_1 = require("./models/node");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(compareFn) {
        if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
        this.compareFn = compareFn;
    }
    BinarySearchTree.prototype.insert = function (key) {
        // special case: first key
        if (this.root == null) {
            this.root = new node_1.Node(key);
        }
        else {
            this.insertNode(this.root, key);
        }
    };
    BinarySearchTree.prototype.insertNode = function (node, key) {
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new node_1.Node(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new node_1.Node(key);
        }
        else {
            this.insertNode(node.right, key);
        }
    };
    BinarySearchTree.prototype.getRoot = function () {
        return this.root;
    };
    BinarySearchTree.prototype.search = function (key) {
        return this.searchNode(this.root, key);
    };
    BinarySearchTree.prototype.searchNode = function (node, key) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === util_1.Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }
        // key is equal to node.item
        return true;
    };
    BinarySearchTree.prototype.inOrderTraverse = function (callback) {
        this.inOrderTraverseNode(this.root, callback);
    };
    BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    };
    BinarySearchTree.prototype.preOrderTraverse = function (callback) {
        this.preOrderTraverseNode(this.root, callback);
    };
    BinarySearchTree.prototype.preOrderTraverseNode = function (node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    };
    BinarySearchTree.prototype.postOrderTraverse = function (callback) {
        this.postOrderTraverseNode(this.root, callback);
    };
    BinarySearchTree.prototype.postOrderTraverseNode = function (node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };
    BinarySearchTree.prototype.min = function () {
        return this.minNode(this.root);
    };
    BinarySearchTree.prototype.minNode = function (node) {
        var current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    };
    BinarySearchTree.prototype.max = function () {
        return this.maxNode(this.root);
    };
    BinarySearchTree.prototype.maxNode = function (node) {
        var current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    };
    BinarySearchTree.prototype.remove = function (key) {
        this.root = this.removeNode(this.root, key);
    };
    BinarySearchTree.prototype.removeNode = function (node, key) {
        if (node == null) {
            return null;
        }
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (this.compareFn(key, node.key) === util_1.Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            // key is equal to node.item
            // handle 3 special conditions
            // 1 - a leaf node
            // 2 - a node with only 1 child
            // 3 - a node with 2 children
            // case 1
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            // case 2
            if (node.left == null) {
                node = node.right;
                return node;
            }
            else if (node.right == null) {
                node = node.left;
                return node;
            }
            // case 3
            var aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    };
    return BinarySearchTree;
}());
exports.default = BinarySearchTree;
