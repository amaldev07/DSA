/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let n = isConnected.length;
    let parent = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j] === 1) {
                union(i, j);
            }
        }
    }

    let provinces = new Set();
    for (let i = 0; i < parent.length; i++) {
        provinces.add(find(i));
    }

    return provinces.size;

    function find(node) {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]);
        }

        return parent[node];
    }

    function union(a, b) {
        let leaderA = find(a);
        let leaderB = find(b);
        if (leaderA === leaderB) return false;
        parent[leaderB] = leaderA;
    }
};