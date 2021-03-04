"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lcs = void 0;
function lcs(wordX, wordY, m, n) {
    if (m === void 0) { m = wordX.length; }
    if (n === void 0) { n = wordY.length; }
    if (m === 0 || n === 0) {
        return 0;
    }
    if (wordX[m - 1] === wordY[n - 1]) {
        return 1 + lcs(wordX, wordY, m - 1, n - 1);
    }
    else {
        var a = lcs(wordX, wordY, m, n - 1);
        var b = lcs(wordX, wordY, m - 1, n);
        return a > b ? a : b;
    }
}
exports.lcs = lcs;
