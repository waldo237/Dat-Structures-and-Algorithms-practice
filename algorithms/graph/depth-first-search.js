"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DFS = exports.depthFirstSearch = void 0;
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
var depthFirstSearchVisit = function (u, color, adjList, callback) {
    color[u] = 'grey';
    if (callback) {
        callback(u);
    }
    // console.log('Discovered ' + u);
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w, color, adjList, callback);
        }
    }
    color[u] = Colors.BLACK;
    // console.log('explored ' + u);
};
var depthFirstSearch = function (graph, callback) {
    var vertices = graph.getVertices();
    var adjList = graph.getAdjList();
    var color = initializeColor(vertices);
    for (var i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
};
exports.depthFirstSearch = depthFirstSearch;
var DFSVisit = function (u, color, d, f, p, time, adjList) {
    // console.log('discovered ' + u);
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            p[w] = u;
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }
    color[u] = Colors.BLACK;
    f[u] = ++time.count;
    // console.log('explored ' + u);
};
var DFS = function (graph) {
    var vertices = graph.getVertices();
    var adjList = graph.getAdjList();
    var color = initializeColor(vertices);
    var d = {};
    var f = {};
    var p = {};
    var time = { count: 0 };
    for (var i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
    }
    for (var i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }
    return {
        discovery: d,
        finished: f,
        predecessors: p
    };
};
exports.DFS = DFS;
