"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greatestDifference = void 0;
var greatestDifference = function (numbers) {
    var index = 0;
    var largest = numbers[0];
    var length = numbers.length;
    var number;
    var smallest = numbers[0];
    for (index; index < length; index++) {
        number = numbers[index];
        if (number > largest) {
            largest = number;
        }
        if (number < smallest) {
            smallest = number;
        }
    }
    return largest - smallest;
};
exports.greatestDifference = greatestDifference;
