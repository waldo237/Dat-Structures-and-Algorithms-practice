"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequentialSearch = void 0;
var util_1 = require("../../util");
function sequentialSearch(array, value, equalsFn) {
    if (equalsFn === void 0) { equalsFn = util_1.defaultEquals; }
    for (var i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i;
        }
    }
    return util_1.DOES_NOT_EXIST;
}
exports.sequentialSearch = sequentialSearch;
