"use strict";
var UndirectedGraph = /** @class */ (function () {
    function UndirectedGraph() {
        this.edges = {};
    }
    UndirectedGraph.prototype.addVertex = function (vertex) {
        this.edges[vertex] = {};
    };
    return UndirectedGraph;
}());
