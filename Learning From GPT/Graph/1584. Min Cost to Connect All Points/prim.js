/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let n = points.length;
    let graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let [a, b] = points[i];
            let [c, d] = points[j];
            let cost = Math.abs(a - c) + Math.abs(b - d);
            graph[i].push([j, cost]);
            graph[j].push([i, cost]);
        }
    }
    let heap = new MyMinHeap();
    heap.insert([0, 0])
    let visited = new Array(n).fill(false);
    let visitedCount = 0;
    let totalCost = 0;
    while (heap.size() > 0) {
        let [node, edgeCost] = heap.removeMin();
        if (visited[node]) continue;
        totalCost = totalCost + edgeCost;
        visitedCount = visitedCount + 1;
        visited[node] = true;
        if (visitedCount == n) break;
        for (let [neighbour, weight] of graph[node]) {
            if (!visited[neighbour]) {
                heap.insert([neighbour, weight]);
            }
        }
    }
    return totalCost;
}