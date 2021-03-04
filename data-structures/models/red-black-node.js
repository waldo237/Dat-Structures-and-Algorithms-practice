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
exports.RedBlackNode = exports.Colors = void 0;
var node_1 = require("./node");
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLACK"] = 1] = "BLACK";
})(Colors = exports.Colors || (exports.Colors = {}));
var RedBlackNode = /** @class */ (function (_super) {
    __extends(RedBlackNode, _super);
    function RedBlackNode(key) {
        var _this = _super.call(this, key) || this;
        _this.key = key;
        _this.color = Colors.RED;
        return _this;
    }
    RedBlackNode.prototype.isRed = function () {
        return this.color === Colors.RED;
    };
    return RedBlackNode;
}(node_1.Node));
exports.RedBlackNode = RedBlackNode;
