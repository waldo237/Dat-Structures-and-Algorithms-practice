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
var red_black_node_1 = require("./models/red-black-node");
var RedBlackTree = /** @class */ (function (_super) {
    __extends(RedBlackTree, _super);
    function RedBlackTree(compareFn) {
        if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
        var _this = _super.call(this, compareFn) || this;
        _this.compareFn = compareFn;
        return _this;
    }
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
    RedBlackTree.prototype.rotationLL = function (node) {
        var tmp = node.left;
        node.left = tmp.right;
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        }
        else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            }
            else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
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
    RedBlackTree.prototype.rotationRR = function (node) {
        var tmp = node.right;
        node.right = tmp.left;
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        }
        else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            }
            else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    };
    RedBlackTree.prototype.insert = function (key) {
        // special case: first key
        if (this.root == null) {
            this.root = new red_black_node_1.RedBlackNode(key);
            this.root.color = red_black_node_1.Colors.BLACK;
        }
        else {
            var newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    };
    RedBlackTree.prototype.insertNode = function (node, key) {
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new red_black_node_1.RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            }
            else {
                return this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new red_black_node_1.RedBlackNode(key);
            node.right.parent = node;
            return node.right;
        }
        else {
            return this.insertNode(node.right, key);
        }
    };
    RedBlackTree.prototype.fixTreeProperties = function (node) {
        while (node && node.parent && node.parent.color === red_black_node_1.Colors.RED && node.color !== red_black_node_1.Colors.BLACK) {
            var parent_1 = node.parent;
            var grandParent = parent_1.parent;
            // case A
            if (grandParent && grandParent.left === parent_1) {
                var uncle = grandParent.right;
                // case 1: uncle of node is also red - only recoloring
                if (uncle && uncle.isRed()) {
                    grandParent.color = red_black_node_1.Colors.RED;
                    parent_1.color = red_black_node_1.Colors.BLACK;
                    uncle.color = red_black_node_1.Colors.BLACK;
                    node = grandParent;
                }
                else {
                    // case 2: node is right child - left rotate
                    if (node === parent_1.right) {
                        this.rotationRR(parent_1);
                        node = parent_1;
                        parent_1 = node.parent;
                    }
                    // case 3: node is left child - right rotate
                    this.rotationLL(grandParent);
                    // swap color
                    parent_1.color = red_black_node_1.Colors.BLACK;
                    grandParent.color = red_black_node_1.Colors.RED;
                    node = parent_1;
                }
            }
            else { // case B: parent is right child of grand parent
                var uncle = grandParent.left;
                // case 1: uncle is read - only recoloring
                if (uncle && uncle.isRed()) {
                    grandParent.color = red_black_node_1.Colors.RED;
                    parent_1.color = red_black_node_1.Colors.BLACK;
                    uncle.color = red_black_node_1.Colors.BLACK;
                    node = grandParent;
                }
                else {
                    // case 2: node is left child - left rotate
                    if (node === parent_1.left) {
                        this.rotationLL(parent_1);
                        node = parent_1;
                        parent_1 = node.parent;
                    }
                    // case 3: node is right child - left rotate
                    this.rotationRR(grandParent);
                    // swap color
                    parent_1.color = red_black_node_1.Colors.BLACK;
                    grandParent.color = red_black_node_1.Colors.RED;
                    node = parent_1;
                }
            }
        }
        this.root.color = red_black_node_1.Colors.BLACK;
    };
    RedBlackTree.prototype.getRoot = function () {
        return this.root;
    };
    return RedBlackTree;
}(binary_search_tree_1.default));
exports.default = RedBlackTree;
