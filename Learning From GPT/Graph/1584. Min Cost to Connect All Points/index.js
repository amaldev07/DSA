/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let n = points.length;
    let edges = [];
    for (let i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            let [a, b] = points[i];
            let [c, d] = points[j];
            let cost = Math.abs(a - c) + Math.abs(b - d);
            edges.push([i, j, cost]);
        }
    }
    edges.sort((a, b) => a[2] - b[2]);
    let totalCost = 0;
    let dsu = new DSU(n);
    let selectedEdges = [];
    for (let [a, b, weight] of edges) {
        if (dsu.union(a, b)) {
            selectedEdges.push([a, b, weight]);
            totalCost = totalCost + weight;
        }
        if (selectedEdges.length === n - 1) {
            break;
        }
    }

    return totalCost;
};


class DSU {
    constructor(n) {
        this.parent = [];
        this.size = [];
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }
    find(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(a, b) {
        let parentofA = this.find(a);
        let parentofB = this.find(b);
        if (parentofA === parentofB) {
            return false;
        }
        if (this.size[parentofA] < this.size[parentofB]) {
            this.parent[parentofA] = parentofB;
            this.size[parentofB] = this.size[parentofB] + this.size[parentofA];
        } else {
            this.parent[parentofB] = parentofA;
            this.size[parentofA] = this.size[parentofB] + this.size[parentofA];
        }

        return true;
    }
}