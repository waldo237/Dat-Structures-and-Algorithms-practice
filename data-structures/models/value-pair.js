"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValuePair = void 0;
var ValuePair = /** @class */ (function () {
    function ValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    ValuePair.prototype.toString = function () {
        return "[#" + this.key + ": " + this.value + "]";
    };
    return ValuePair;
}());
exports.ValuePair = ValuePair;
