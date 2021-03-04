"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dictionary_1 = __importDefault(require("./dictionary"));
var Graph = /** @class */ (function () {
    function Graph(isDirected) {
        if (isDirected === void 0) { isDirected = false; }
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new dictionary_1.default();
    }
    Graph.prototype.addVertex = function (v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []); // initialize adjacency list with array as well;
        }
    };
    Graph.prototype.addEdge = function (a, b) {
        if (!this.adjList.get(a)) {
            this.addVertex(a);
        }
        if (!this.adjList.get(b)) {
            this.addVertex(b);
        }
        this.adjList.get(a).push(b);
        if (this.isDirected !== true) {
            this.adjList.get(b).push(a);
        }
    };
    Graph.prototype.getVertices = function () {
        return this.vertices;
    };
    Graph.prototype.getAdjList = function () {
        return this.adjList;
    };
    Graph.prototype.toString = function () {
        var s = '';
        for (var i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + ' -> ';
            var neighbors = this.adjList.get(this.vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };
    return Graph;
}());
exports.default = Graph;
