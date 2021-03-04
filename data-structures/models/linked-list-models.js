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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyNode = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(element, next) {
        this.element = element;
        this.next = next;
    }
    return Node;
}());
exports.Node = Node;
var DoublyNode = /** @class */ (function (_super) {
    __extends(DoublyNode, _super);
    function DoublyNode(element, next, prev) {
        var _this = _super.call(this, element, next) || this;
        _this.element = element;
        _this.next = next;
        _this.prev = prev;
        return _this;
    }
    return DoublyNode;
}(Node));
exports.DoublyNode = DoublyNode;
