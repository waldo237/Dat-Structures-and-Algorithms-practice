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
var CircularLinkedList = /** @class */ (function (_super) {
    __extends(CircularLinkedList, _super);
    function CircularLinkedList(equalsFn) {
        if (equalsFn === void 0) { equalsFn = util_1.defaultEquals; }
        var _this = _super.call(this, equalsFn) || this;
        _this.equalsFn = equalsFn;
        return _this;
    }
    CircularLinkedList.prototype.push = function (element) {
        var node = new linked_list_models_1.Node(element);
        var current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.getElementAt(this.size() - 1);
            current.next = node;
        }
        // set node.next to head - to have circular list
        node.next = this.head;
        this.count++;
    };
    CircularLinkedList.prototype.insert = function (element, index) {
        if (index >= 0 && index <= this.count) {
            var node = new linked_list_models_1.Node(element);
            var current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    // if no node  in list
                    this.head = node;
                    node.next = this.head;
                }
                else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    // update last element
                    this.head = node;
                    current.next = this.head;
                }
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
    CircularLinkedList.prototype.removeAt = function (index) {
        if (index >= 0 && index < this.count) {
            var current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                }
                else {
                    var removed = this.head;
                    current = this.getElementAt(this.size() - 1);
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            }
            else {
                // no need to update last element for circular list
                var previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    };
    return CircularLinkedList;
}(linked_list_1.default));
exports.default = CircularLinkedList;
