"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseConverter = exports.decimalToBinary = void 0;
var stack_1 = __importDefault(require("../data-structures/stack"));
function decimalToBinary(decNumber) {
    var remStack = new stack_1.default();
    var rem;
    var binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
exports.decimalToBinary = decimalToBinary;
function baseConverter(decNumber, base) {
    var remStack = new stack_1.default();
    var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var rem;
    var baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
exports.baseConverter = baseConverter;
