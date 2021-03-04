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
var linked_list_1 = __importDefault(require("./linked-list"));
var linked_list_models_1 = require("./models/linked-list-models");
var DoublyLinkedList = /** @class */ (function (_super) {
    __extends(DoublyLinkedList, _super);
    function DoublyLinkedList(equalsFn) {
        if (equalsFn === void 0) { equalsFn = util_1.defaultEquals; }
        var _this = _super.call(this, equalsFn) || this;
        _this.equalsFn = equalsFn;
        return _this;
    }
    DoublyLinkedList.prototype.push = function (element) {
        var node = new linked_list_models_1.DoublyNode(element);
        if (this.head == null) {
            this.head = node;
            this.tail = node; // NEW
        }
        else {
            // attach to the tail node // NEW
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    };
    DoublyLinkedList.prototype.insert = function (element, index) {
        if (index >= 0 && index <= this.count) {
            var node = new linked_list_models_1.DoublyNode(element);
            var current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    // NEW
                    this.head = node;
                    this.tail = node;
                }
                else {
                    node.next = this.head;
                    this.head.prev = node; // NEW
                    this.head = node;
                }
            }
            else if (index === this.count) {
                // last item // NEW
                current = this.tail; // {2}
                current.next = node;
                node.prev = current;
                this.tail = node;
            }
            else {
                var previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node; // NEW
                node.prev = previous; // NEW
            }
            this.count++;
            return true;
        }
        return false;
    };
    DoublyLinkedList.prototype.removeAt = function (index) {
        if (index >= 0 && index < this.count) {
            var current = this.head;
            if (index === 0) {
                this.head = this.head.next; // {1}
                // if there is only one item, then we update tail as well //NEW
                if (this.count === 1) {
                    // {2}
                    this.tail = undefined;
                }
                else {
                    this.head.prev = undefined; // {3}
                }
            }
            else if (index === this.count - 1) {
                // last item //NEW
                current = this.tail; // {4}
                this.tail = current.prev;
                this.tail.next = undefined;
            }
            else {
                current = this.getElementAt(index);
                var previous = current.prev;
                // link previous with current's next - skip it to remove
                previous.next = current.next; // {6}
                current.next.prev = previous; // NEW
            }
            this.count--;
            return current.element;
        }
        return undefined;
    };
    DoublyLinkedList.prototype.indexOf = function (element) {
        var current = this.head;
        var index = 0;
        while (current != null) {
            if (this.equalsFn(element, current.element)) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    DoublyLinkedList.prototype.getHead = function () {
        return this.head;
    };
    DoublyLinkedList.prototype.getTail = function () {
        return this.tail;
    };
    DoublyLinkedList.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.tail = undefined;
    };
    DoublyLinkedList.prototype.toString = function () {
        if (this.head == null) {
            return '';
        }
        var objString = "" + this.head.element;
        var current = this.head.next;
        while (current != null) {
            objString = objString + "," + current.element;
            current = current.next;
        }
        return objString;
    };
    DoublyLinkedList.prototype.inverseToString = function () {
        if (this.tail == null) {
            return '';
        }
        var objString = "" + this.tail.element;
        var previous = this.tail.prev;
        while (previous != null) {
            objString = objString + "," + previous.element;
            previous = previous.prev;
        }
        return objString;
    };
    return DoublyLinkedList;
}(linked_list_1.default));
exports.default = DoublyLinkedList;
