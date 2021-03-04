"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kruskal = void 0;
var INF = Number.MAX_SAFE_INTEGER;
var find = function (i, parent) {
    while (parent[i]) {
        i = parent[i];
    }
    return i;
};
var union = function (i, j, parent) {
    if (i !== j) {
        parent[j] = i;
        return true;
    }
    return false;
};
var initializeCost = function (graph) {
    var cost = [];
    var length = graph.length;
    for (var i = 0; i < length; i++) {
        cost[i] = [];
        for (var j = 0; j < length; j++) {
            if (graph[i][j] === 0) {
                cost[i][j] = INF;
            }
            else {
                cost[i][j] = graph[i][j];
            }
        }
    }
    return cost;
};
var kruskal = function (graph) {
    var length = graph.length;
    var parent = [];
    var ne = 0;
    var a;
    var b;
    var u;
    var v;
    var cost = initializeCost(graph);
    while (ne < length - 1) {
        for (var i = 0, min = INF; i < length; i++) {
            for (var j = 0; j < length; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j];
                    a = u = i;
                    b = v = j;
                }
            }
        }
        u = find(u, parent);
        v = find(v, parent);
        if (union(u, v, parent)) {
            ne++;
        }
        cost[a][b] = cost[b][a] = INF;
    }
    return parent;
};
exports.kruskal = kruskal;
