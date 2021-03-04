"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var doubly_linked_list_1 = __importDefault(require("./doubly-linked-list"));
var StackLinkedList = /** @class */ (function () {
    function StackLinkedList() {
        this.items = new doubly_linked_list_1.default();
    }
    StackLinkedList.prototype.push = function (element) {
        this.items.push(element);
    };
    StackLinkedList.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items.removeAt(this.size() - 1);
        return result;
    };
    StackLinkedList.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    };
    StackLinkedList.prototype.isEmpty = function () {
        return this.items.isEmpty();
    };
    StackLinkedList.prototype.size = function () {
        return this.items.size();
    };
    StackLinkedList.prototype.clear = function () {
        this.items.clear();
    };
    StackLinkedList.prototype.toString = function () {
        return this.items.toString();
    };
    return StackLinkedList;
}());
exports.default = StackLinkedList;
