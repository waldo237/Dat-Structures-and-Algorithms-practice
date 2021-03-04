"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dijkstra = void 0;
var INF = Number.MAX_SAFE_INTEGER;
var minDistance = function (dist, visited) {
    var min = INF;
    var minIndex = -1;
    for (var v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
};
var dijkstra = function (graph, src) {
    var dist = [];
    var visited = [];
    var length = graph.length;
    for (var i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    for (var i = 0; i < length - 1; i++) {
        var u = minDistance(dist, visited);
        visited[u] = true;
        for (var v = 0; v < length; v++) {
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
};
exports.dijkstra = dijkstra;
