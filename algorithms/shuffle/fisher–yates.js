"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
var util_1 = require("../../util");
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        util_1.swap(array, i, randomIndex);
    }
    return array;
}
exports.shuffle = shuffle;
