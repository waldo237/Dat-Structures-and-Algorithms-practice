"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knapSack = void 0;
function knapSack(capacity, weights, values, n) {
    if (n === 0 || capacity === 0) {
        return 0;
    }
    if (weights[n - 1] > capacity) {
        return knapSack(capacity, weights, values, n - 1);
    }
    else {
        var a = values[n - 1] + knapSack(capacity - weights[n - 1], weights, values, n - 1);
        var b = knapSack(capacity, weights, values, n - 1);
        return a > b ? a : b;
    }
}
exports.knapSack = knapSack;
