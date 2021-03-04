"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prim = void 0;
var INF = Number.MAX_SAFE_INTEGER;
var minKey = function (graph, key, visited) {
    // Initialize min value
    var min = INF;
    var minIndex = 0;
    for (var v = 0; v < graph.length; v++) {
        if (visited[v] === false && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }
    return minIndex;
};
var prim = function (graph) {
    var parent = [];
    var key = [];
    var visited = [];
    var length = graph.length;
    for (var i = 0; i < length; i++) {
        key[i] = INF;
        visited[i] = false;
    }
    key[0] = 0;
    parent[0] = -1;
    for (var i = 0; i < length - 1; i++) {
        var u = minKey(graph, key, visited);
        visited[u] = true;
        for (var v = 0; v < length; v++) {
            if (graph[u][v] && visited[v] === false && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }
    return parent;
};
exports.prim = prim;
