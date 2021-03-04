"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parenthesesChecker = void 0;
var stack_1 = __importDefault(require("../data-structures/stack"));
function parenthesesChecker(symbols) {
    var stack = new stack_1.default();
    var opens = '([{';
    var closers = ')]}';
    var balanced = true;
    var index = 0;
    var symbol;
    var top;
    while (index < symbols.length && balanced) {
        symbol = symbols[index];
        if (opens.indexOf(symbol) >= 0) {
            stack.push(symbol);
        }
        else {
            if (stack.isEmpty()) {
                balanced = false;
            }
            else {
                top = stack.pop();
                if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                    balanced = false;
                }
            }
        }
        index++;
    }
    return balanced && stack.isEmpty();
}
exports.parenthesesChecker = parenthesesChecker;
