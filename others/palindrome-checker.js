"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindromeChecker = void 0;
var deque_1 = __importDefault(require("../data-structures/deque"));
function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)) {
        return false;
    }
    var deque = new deque_1.default();
    var lowerString = aString.toLocaleLowerCase().split(' ').join('');
    var firstChar, lastChar;
    for (var i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            return false;
        }
    }
    return true;
}
exports.palindromeChecker = palindromeChecker;
