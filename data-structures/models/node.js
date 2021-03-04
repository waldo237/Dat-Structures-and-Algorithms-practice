"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(key) {
        this.key = key;
    }
    Node.prototype.toString = function () {
        return "" + this.key;
    };
    return Node;
}());
exports.Node = Node;
