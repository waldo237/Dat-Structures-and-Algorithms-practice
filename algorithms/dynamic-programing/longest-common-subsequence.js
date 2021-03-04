"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lcs = void 0;
function lcs(wordX, wordY) {
    var m = wordX.length;
    var n = wordY.length;
    var l = [];
    for (var i = 0; i <= m; i++) {
        l[i] = [];
        for (var j = 0; j <= n; j++) {
            l[i][j] = 0;
        }
    }
    for (var i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                l[i][j] = 0;
            }
            else if (wordX[i - 1] === wordY[j - 1]) {
                l[i][j] = l[i - 1][j - 1] + 1;
            }
            else {
                var a = l[i - 1][j];
                var b = l[i][j - 1];
                l[i][j] = a > b ? a : b; // max(a,b)
            }
        }
        // console.log(l[i].join());
    }
    return l[m][n];
}
exports.lcs = lcs;
