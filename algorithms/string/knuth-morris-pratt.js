"use strict";
var buildTable = function (pattern) {
    var length = pattern.length;
    var table = [];
    var position = 2;
    var cnd = 0;
    table[0] = -1;
    table[1] = 0;
    while (position < length) {
        if (pattern[position - 1] === pattern[cnd]) {
            table[position++] = ++cnd;
        }
        else if (cnd > 0) {
            cnd = table[cnd];
        }
        else {
            table[position++] = 0;
        }
    }
    return table;
};
var knuthMorrisPratt = function (text, pattern) {
    var textLength = text.length;
    var patternLength = pattern.length;
    var m = 0;
    var i = 0;
    var table = buildTable(pattern);
    while (m + i < textLength) {
        if (pattern[i] === text[m + i]) {
            if (i === patternLength - 1) {
                return m;
            }
            i++;
        }
        else if (table[i] >= 0) {
            i = table[i];
            m = m + i - table[i];
        }
        else {
            i = 0;
            m++;
        }
    }
    return textLength;
};
