class UndirectedGraph<T>{
    edges:Object |null = {};


    addVertex (vertex:any) {
        this.edges[vertex] = {};
    }
}