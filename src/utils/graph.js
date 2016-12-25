// based off https://gist.github.com/Cfeusier/9b1c0020621382cbdedb
// todo: maybe just use http://swannodette.github.io/mori/
export default class Graph {
    constructor() {
        this.nodes = {};
        this.edges = {};
    }

    addNode(node) {
        this.nodes[node] = node;
    }

    contains(node) {
        return !!this.nodes[node];
    }

    removeNode(node) {
        if (this.contains(node)) {
            delete this.nodes[node];
        }
    }

    hasEdge(fromNode, toNode) {
        const edgeKeys = Object.keys(this.edges);

        const edge = !!edgeKeys
            .find(key => {
                const fromMatch = this.edges[key][0] === fromNode && this.edges[key][1] === toNode;
                const toMatch = this.edges[key][1] === toNode && this.edges[key][0] === toNode;

                return fromMatch && toMatch;
            });
    }

    addEdge(fromNode,toNode) {
        this.edges[fromNode] = [fromNode, toNode];
    }

    removeEdge(fromNode, toNode) {
        if (this.hasEdge(fromNode, toNode)) {
            delete this.edges[fromNode];
        }
    }

    forEachNode(cb) {
        this.nodes.forEach(cb);
    }

    //this implementation is missing shit for getting adjacents from a node, 
    //which is kindof the whole point for using this as a way of storing the dungeon map
}
