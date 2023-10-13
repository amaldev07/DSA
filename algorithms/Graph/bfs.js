let adjacencyList = {
    1: [2, 6],
    2: [1, 3, 4],
    3: [2],
    4: [2, 5],
    5: [4, 7],
    6: [1, 7, 8],
    7: [6, 5],
    8: [6]
}

/* where v is the no of nodes */
function bfs(v, adjacencyList) {
    let visited = new Array(v + 1).fill(0);
    let q = [1];
    let bfsOut = [];
    while (q.length > 0) {
        
    }
    return bfsOut;
}
