"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixChainOrder = void 0;
function matrixChainOrder(p, i, j) {
    if (i === void 0) { i = 1; }
    if (j === void 0) { j = p.length - 1; }
    if (i === j) {
        return 0;
    }
    var min = Number.MAX_SAFE_INTEGER;
    for (var k = i; k < j; k++) {
        var count = matrixChainOrder(p, i, k) + matrixChainOrder(p, k + 1, j) + p[i - 1] * p[k] * p[j];
        if (count < min) {
            min = count;
        }
    }
    return min;
}
exports.matrixChainOrder = matrixChainOrder;
