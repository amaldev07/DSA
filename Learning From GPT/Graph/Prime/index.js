function prim(n, graph) {
    let heap = new MinHeap();
    heap.insert([0, 0]);
    let visited = new Array(n).fill(false);
    let totalCost = 0;
    let visitedCount = 0;
    while (heap.size() > 0) {
        let [node, edgeWeight] = heap.removeMin();
        if (visited[node]) continue;
        visited[node] = true;
        visitedCount = visitedCount + 1;
        totalCost = totalCost + edgeWeight;
        for (let [neighbor, weight] of graph[node]) {
            if (!visited[neighbor]) {
                heap.insert([neighbor, weight]);
            }
        }

        if (visitedCount == n) break;
    }
    return totalCost;
}

let graph = [
    [[1, 3], [2, 4]],      // 0
    [[0, 3], [2, 1], [3, 2]], // 1
    [[0, 4], [1, 1], [3, 5]], // 2
    [[1, 2], [2, 5]]          // 3
];
prime(n, graph);
