"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var binary_search_tree_1 = __importDefault(require("./binary-search-tree"));
var node_1 = require("./models/node");
var BalanceFactor;
(function (BalanceFactor) {
    BalanceFactor[BalanceFactor["UNBALANCED_RIGHT"] = 1] = "UNBALANCED_RIGHT";
    BalanceFactor[BalanceFactor["SLIGHTLY_UNBALANCED_RIGHT"] = 2] = "SLIGHTLY_UNBALANCED_RIGHT";
    BalanceFactor[BalanceFactor["BALANCED"] = 3] = "BALANCED";
    BalanceFactor[BalanceFactor["SLIGHTLY_UNBALANCED_LEFT"] = 4] = "SLIGHTLY_UNBALANCED_LEFT";
    BalanceFactor[BalanceFactor["UNBALANCED_LEFT"] = 5] = "UNBALANCED_LEFT";
})(BalanceFactor || (BalanceFactor = {}));
var AVLTree = /** @class */ (function (_super) {
    __extends(AVLTree, _super);
    function AVLTree(compareFn) {
        if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
        var _this = _super.call(this, compareFn) || this;
        _this.compareFn = compareFn;
        return _this;
    }
    AVLTree.prototype.getNodeHeight = function (node) {
        if (node == null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    };
    /**
     * Left left case: rotate right
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     * @param node Node<T> 
     */
    AVLTree.prototype.rotationLL = function (node) {
        var tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    };
    /**
     * Right right case: rotate left
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     * @param node Node<T>
     */
    AVLTree.prototype.rotationRR = function (node) {
        var tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    };
    /**
     * Left right case: rotate left then right
     * @param node Node<T>
     */
    AVLTree.prototype.rotationLR = function (node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    };
    /**
     * Right left case: rotate right then left
     * @param node Node<T>
     */
    AVLTree.prototype.rotationRL = function (node) {
        node.right = this.rotationLL(node.right);
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
        if (node == null) {
            return new node_1.Node(key);
        }
        else if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === util_1.Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        }
        else {
            return node; // duplicated key
        }
        // verify if tree is balanced
        var balanceState = this.getBalanceFactor(node);
        if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === util_1.Compare.LESS_THAN) {
                // Left left case
                node = this.rotationLL(node);
            }
            else {
                // Left right case
                return this.rotationLR(node);
            }
        }
        if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === util_1.Compare.BIGGER_THAN) {
                // Right right case
                node = this.rotationRR(node);
            }
            else {
                // Right left case
                return this.rotationRL(node);
            }
        }
        return node;
    };
    AVLTree.prototype.removeNode = function (node, key) {
        if (node == null) {
            return null;
        }
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            // The key to be deleted is in the left sub-tree
            node.left = this.removeNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === util_1.Compare.BIGGER_THAN) {
            // The key to be deleted is in the right sub-tree
            node.right = this.removeNode(node.right, key);
        }
        else {
            // node is the node to be deleted
            if (node.left == null && node.right == null) {
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
        }
        if (node == null) {
            return node;
        }
        // verify if tree is balanced
        var balanceState = this.getBalanceFactor(node);
        if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
            // Left left case
            if (this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationLL(node);
            }
            // Left right case
            if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node.left);
            }
        }
        if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
            // Right right case
            if (this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationRR(node);
            }
            // Right left case
            if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationRL(node.right);
            }
        }
        return node;
    };
    return AVLTree;
}(binary_search_tree_1.default));
exports.default = AVLTree;
