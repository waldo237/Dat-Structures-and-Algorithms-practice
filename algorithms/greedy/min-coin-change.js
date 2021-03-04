"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minCoinChange = void 0;
function minCoinChange(coins, amount) {
    var change = [];
    var total = 0;
    for (var i = coins.length; i >= 0; i--) {
        var coin = coins[i];
        while (total + coin <= amount) {
            change.push(coin);
            total += coin;
        }
    }
    return change;
}
exports.minCoinChange = minCoinChange;
