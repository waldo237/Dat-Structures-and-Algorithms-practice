"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bfs = exports.breadthFirstSearch = void 0;
var queue_1 = __importDefault(require("../../data-structures/queue"));
var Colors;
(function (Colors) {
    Colors[Colors["WHITE"] = 0] = "WHITE";
    Colors[Colors["GREY"] = 1] = "GREY";
    Colors[Colors["BLACK"] = 2] = "BLACK";
})(Colors || (Colors = {}));
var initializeColor = function (vertices) {
    var color = {};
    for (var i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};
var breadthFirstSearch = function (graph, startVertex, callback) {
    var vertices = graph.getVertices();
    var adjList = graph.getAdjList();
    var color = initializeColor(vertices);
    var queue = new queue_1.default();
    queue.enqueue(startVertex);
    while (!queue.isEmpty()) {
        var u = queue.dequeue();
        var neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if (callback) {
            callback(u);
        }
    }
};
exports.breadthFirstSearch = breadthFirstSearch;
var bfs = function (graph, startVertex) {
    var vertices = graph.getVertices();
    var adjList = graph.getAdjList();
    var color = initializeColor(vertices);
    var queue = new queue_1.default();
    var distances = {};
    var predecessors = {};
    queue.enqueue(startVertex);
    for (var i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }
    while (!queue.isEmpty()) {
        var u = queue.dequeue(), neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }
    return {
        distances: distances,
        predecessors: predecessors
    };
};
exports.bfs = bfs;
