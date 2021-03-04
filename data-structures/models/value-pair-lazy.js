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
exports.ValuePairLazy = void 0;
var value_pair_1 = require("./value-pair");
var ValuePairLazy = /** @class */ (function (_super) {
    __extends(ValuePairLazy, _super);
    function ValuePairLazy(key, value, isDeleted) {
        if (isDeleted === void 0) { isDeleted = false; }
        var _this = _super.call(this, key, value) || this;
        _this.key = key;
        _this.value = value;
        _this.isDeleted = isDeleted;
        return _this;
    }
    return ValuePairLazy;
}(value_pair_1.ValuePair));
exports.ValuePairLazy = ValuePairLazy;
