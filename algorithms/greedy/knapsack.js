"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knapSack = void 0;
function knapSack(capacity, weights, values) {
    var n = values.length;
    var load = 0;
    var val = 0;
    for (var i = 0; i < n && load < capacity; i++) {
        if (weights[i] <= capacity - load) {
            val += values[i];
            load += weights[i];
            // console.log('using item ' + (i + 1) + ' for the solution');
        }
        else {
            var r = (capacity - load) / weights[i];
            val += r * values[i];
            load += weights[i];
            // console.log('using ratio of ' + r + ' for item ' + (i + 1) + ' for the solution');
        }
    }
    return val;
}
exports.knapSack = knapSack;
