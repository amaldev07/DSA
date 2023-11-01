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
    visited[1] = 1;
    let q = [1];
    let bfsOut = [];
    while (q.length > 0) {
        debugger;
        let el = q.shift();
        bfsOut.push(el);
        let adjEl = adjacencyList[el];
        for (let i = 0; i < adjEl.length; i++) {
            if (visited[adjEl[i]] !== 1) {
                visited[adjEl[i]] = 1;
                q.push(adjEl[i]);
            }
        }
    }
    return bfsOut;
}
bfs(8, adjacencyList);
/* Output ) [1, 2, 6, 3, 4, 7, 8, 5] */ 
