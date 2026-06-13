/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let n = edges.length;
    let parent = Array.from({ length: n+1 }, (_, i) => i);
    for (let [a, b] of edges) {
        let leaderofA = find(a);
        let leaderofB = find(b);
        if (leaderofA !== leaderofB) {
            union(a, b);
        } else {
            return [a, b];
        }
    }

    function find(node) {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]); // path compression
        }

        return parent[node];
    }

    function union(a, b) {
        let leaderA = find(a);
        let leaderB = find(b);

        if (leaderA === leaderB) {
            return false; // already connected
        }

        parent[leaderB] = leaderA;
        return true;
    }
};



