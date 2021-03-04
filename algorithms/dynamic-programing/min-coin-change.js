"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minCoinChange = void 0;
function minCoinChange(coins, amount) {
    var cache = [];
    // tslint:disable-next-line:no-shadowed-variable
    var makeChange = function (amount) {
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            return cache[amount];
        }
        var min = [], newMin, newAmount;
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i];
            newAmount = amount - coin;
            if (newAmount >= 0) {
                newMin = makeChange(newAmount);
            }
            if (newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                // console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[amount] = min);
    };
    return makeChange(amount);
}
exports.minCoinChange = minCoinChange;
