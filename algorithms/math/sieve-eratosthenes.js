"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sieveOfEratosthenes = void 0;
var sieveOfEratosthenes = function (n) {
    var sieve = [];
    var primes = [];
    sieve[1] = false;
    for (var i = 2; i <= n; i++) {
        sieve[i] = true;
    }
    for (var p = 2; p * p <= n; p++) {
        if (sieve[p]) {
            for (var i = p * 2; i <= n; i += p) {
                sieve[i] = false;
            }
        }
    }
    sieve.forEach(function (value, index) {
        if (value) {
            primes.push(index);
        }
    }, primes);
    return primes;
};
exports.sieveOfEratosthenes = sieveOfEratosthenes;
