"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floydWarshall = void 0;
var floydWarshall = function (graph) {
    var dist = [];
    var length = graph.length;
    for (var i = 0; i < length; i++) {
        dist[i] = [];
        for (var j = 0; j < length; j++) {
            if (i === j) {
                dist[i][j] = 0;
            }
            else if (!isFinite(graph[i][j])) {
                dist[i][j] = Infinity;
            }
            else {
                dist[i][j] = graph[i][j];
            }
        }
    }
    for (var k = 0; k < length; k++) {
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
};
exports.floydWarshall = floydWarshall;
