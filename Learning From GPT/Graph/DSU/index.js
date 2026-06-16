class Dsu {
    constructor() {
        this.parent = [];
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }

    find(node) {
        while (this.parent[node] != node) {
            this.parent[node] = this.find(this.parent[node])
        }
        return this.parent[node];
    }

    union(a, b) {
        let leaderA = this.find(a);
        let leaderB = this.find(b);
        if (leaderA === leaderB) return false;
        this.parent[leaderB] = leaderA;
    }
}