/* 

distance[source] = 0
heap = [[source, 0]]

while heap not empty:
    take node with smallest distance

    if this distance is old:
        continue

    check all neighbours:
        newDistance = currentDistance + edgeWeight

        if newDistance is better:
            update distance
            push into heap
            
*/

/* 
const graph = {
    0: [[1, 4], [2, 1]],
    1: [[3, 1]],
    2: [[1, 2], [3, 5]],
    3: []
};

const source = 0;
*/
function dijkstra(graph, source) {
    let n = Object.keys(graph).length;
    let distance = Array(n).fill(Infinity);
    let heap = new MinHeap();

    distance[source] = 0;
    heap.insert([source, 0]);

    while (heap.size() > 0) {
        let [node, dist] = heap.removeMin();

        if (dist > distance[node]) {
            continue;
        }

        for (let [dNode, dDist] of graph[node]) {
            let newDistance = dist + dDist;

            if (newDistance < distance[dNode]) {
                distance[dNode] = newDistance;
                heap.insert([dNode, newDistance]);
            }
        }
    }

    return distance;
}