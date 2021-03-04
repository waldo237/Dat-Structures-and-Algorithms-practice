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
var SortedLinkedList = /** @class */ (function (_super) {
    __extends(SortedLinkedList, _super);
    function SortedLinkedList(equalsFn, compareFn) {
        if (equalsFn === void 0) { equalsFn = util_1.defaultEquals; }
        if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
        var _this = _super.call(this, equalsFn) || this;
        _this.equalsFn = equalsFn;
        _this.compareFn = compareFn;
        return _this;
    }
    SortedLinkedList.prototype.push = function (element) {
        if (this.isEmpty()) {
            _super.prototype.push.call(this, element);
        }
        else {
            var index = this.getIndexNextSortedElement(element);
            _super.prototype.insert.call(this, element, index);
        }
    };
    SortedLinkedList.prototype.insert = function (element, index) {
        if (index === void 0) { index = 0; }
        if (this.isEmpty()) {
            return _super.prototype.insert.call(this, element, 0);
        }
        index = this.getIndexNextSortedElement(element);
        return _super.prototype.insert.call(this, element, index);
    };
    SortedLinkedList.prototype.getIndexNextSortedElement = function (element) {
        var current = this.head;
        var i = 0;
        for (; i < this.size() && current; i++) {
            var comp = this.compareFn(element, current.element);
            if (comp === util_1.Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    };
    return SortedLinkedList;
}(linked_list_1.default));
exports.default = SortedLinkedList;
