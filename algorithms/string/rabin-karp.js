"use strict";
var base = 997;
var hash = function (word) {
    var h = 0;
    for (var i = 0; i < word.length; i++) {
        h += word.charCodeAt(i) * Math.pow(base, word.length - i - 1);
    }
    return h;
};
var rabinKarp = function (text, pattern) {
    if (pattern == null || pattern.length === 0) {
        return 0;
    }
    var hashPattern = hash(pattern);
    var currentSubstring = text.substring(0, pattern.length);
    var hashCurrentSubstring;
    for (var i = pattern.length; i <= text.length; i++) {
        if (hashCurrentSubstring === undefined) {
            hashCurrentSubstring = hash(currentSubstring);
        }
        else {
            hashCurrentSubstring -= currentSubstring.charCodeAt(0) * Math.pow(base, pattern.length - 1);
            hashCurrentSubstring *= base;
            hashCurrentSubstring += text.charCodeAt(i);
            currentSubstring = currentSubstring.substring(1) + text[i];
        }
        if (hashPattern === hashCurrentSubstring && pattern === currentSubstring) {
            return i === pattern.length ? 0 : i - pattern.length + 1;
        }
    }
    return -1;
};
