function kruskal(n, edges) {
    // edges = [[u, v, weight], ...]
    edges.sort((a, b) => a[2] - b[2]);

    let dsu = new DSU(n);
    let totalCost = 0;
    let selectedEdges = [];

    for (let [u, v, weight] of edges) {
        if (dsu.union(u, v)) {
            totalCost += weight;
            selectedEdges.push([u, v, weight]);
        }

        if (selectedEdges.length === n - 1) {
            break;
        }
    }

    return {
        totalCost,
        selectedEdges
    };
}

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
        let leaderA = this.find(a);
        let leaderB = this.find(b);

        if (leaderA === leaderB) {
            return false; // cycle
        }

        if (this.size[leaderA] < this.size[leaderB]) {
            this.parent[leaderA] = leaderB;
            this.size[leaderB] += this.size[leaderA];
        } else {
            this.parent[leaderB] = leaderA;
            this.size[leaderA] += this.size[leaderB];
        }

        return true;
    }
}