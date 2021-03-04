"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotPotato = void 0;
var queue_1 = __importDefault(require("../data-structures/queue"));
function hotPotato(elementsList, num) {
    var queue = new queue_1.default();
    var elimitatedList = [];
    for (var i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    };
}
exports.hotPotato = hotPotato;
