"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var linked_list_models_1 = require("./models/linked-list-models");
var LinkedList = /** @class */ (function () {
    function LinkedList(equalsFn) {
        if (equalsFn === void 0) { equalsFn = util_1.defaultEquals; }
        this.equalsFn = equalsFn;
        this.count = 0;
    }
    LinkedList.prototype.push = function (element) {
        var node = new linked_list_models_1.Node(element);
        var current;
        if (this.head == null) {
            // catches null && undefined
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    };
    LinkedList.prototype.getElementAt = function (index) {
        if (index >= 0 && index <= this.count) {
            var node = this.head;
            for (var i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    };
    LinkedList.prototype.insert = function (element, index) {
        if (index >= 0 && index <= this.count) {
            var node = new linked_list_models_1.Node(element);
            if (index === 0) {
                var current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                var previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    };
    LinkedList.prototype.removeAt = function (index) {
        if (index >= 0 && index < this.count) {
            var current = this.head;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                var previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    };
    LinkedList.prototype.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    LinkedList.prototype.indexOf = function (element) {
        var current = this.head;
        for (var i = 0; i < this.size() && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    LinkedList.prototype.size = function () {
        return this.count;
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.clear = function () {
        this.head = undefined;
        this.count = 0;
    };
    LinkedList.prototype.toString = function () {
        if (this.head == null) {
            return '';
        }
        var objString = "" + this.head.element;
        var current = this.head.next;
        for (var i = 1; i < this.size() && current != null; i++) {
            objString = objString + "," + current.element;
            current = current.next;
        }
        return objString;
    };
    return LinkedList;
}());
exports.default = LinkedList;
