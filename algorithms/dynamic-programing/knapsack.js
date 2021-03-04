"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knapSack = void 0;
function knapSack(capacity, weights, values, n) {
    var kS = [];
    for (var i = 0; i <= n; i++) {
        kS[i] = [];
    }
    for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                kS[i][w] = 0;
            }
            else if (weights[i - 1] <= w) {
                var a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
                var b = kS[i - 1][w];
                kS[i][w] = a > b ? a : b; // max(a,b)
                // console.log(a + ' can be part of the solution');
            }
            else {
                kS[i][w] = kS[i - 1][w];
            }
        }
        // console.log(kS[i].join());
    }
    // extra algorithm to find the items that are part of the solution
    findValues(n, capacity, kS);
    return kS[n][capacity];
}
exports.knapSack = knapSack;
function findValues(n, capacity, kS) {
    var i = n;
    var k = capacity;
    // console.log('Items that are part of the solution:');
    while (i > 0 && k > 0) {
        if (kS[i][k] !== kS[i - 1][k]) {
            /* console.log(
              'item ' + i + ' can be part of solution w,v: ' + weights[i - 1] + ',' + values[i - 1]
            ); */
            i--;
            k = k - kS[i][k];
        }
        else {
            i--;
        }
    }
}
