"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hanoi = exports.hanoiStack = void 0;
var stack_1 = __importDefault(require("../data-structures/stack"));
function towerOfHanoi(plates, source, helper, dest, sourceName, helperName, destName, moves) {
    if (moves === void 0) { moves = []; }
    if (plates <= 0) {
        return moves;
    }
    if (plates === 1) {
        dest.push(source.pop());
        var move = {};
        move[sourceName] = source.toString();
        move[helperName] = helper.toString();
        move[destName] = dest.toString();
        moves.push(move);
    }
    else {
        towerOfHanoi(plates - 1, source, dest, helper, sourceName, destName, helperName, moves);
        dest.push(source.pop());
        var move = {};
        move[sourceName] = source.toString();
        move[helperName] = helper.toString();
        move[destName] = dest.toString();
        moves.push(move);
        towerOfHanoi(plates - 1, helper, source, dest, helperName, sourceName, destName, moves);
    }
    return moves;
}
function hanoiStack(plates) {
    var source = new stack_1.default();
    var dest = new stack_1.default();
    var helper = new stack_1.default();
    for (var i = plates; i > 0; i--) {
        source.push(i);
    }
    return towerOfHanoi(plates, source, helper, dest, 'source', 'helper', 'dest');
}
exports.hanoiStack = hanoiStack;
function hanoi(plates, source, helper, dest, moves) {
    if (moves === void 0) { moves = []; }
    if (plates <= 0) {
        return moves;
    }
    if (plates === 1) {
        moves.push([source, dest]);
    }
    else {
        hanoi(plates - 1, source, dest, helper, moves);
        moves.push([source, dest]);
        hanoi(plates - 1, helper, source, dest, moves);
    }
    return moves;
}
exports.hanoi = hanoi;
