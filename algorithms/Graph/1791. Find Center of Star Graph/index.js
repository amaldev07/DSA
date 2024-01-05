function findCenter(edges) {
    /* 
    Create the adjucency list from the given edges,
    find out the edge with maximum counts, i.e the edge connected to max other edges,
    that edge should be the Center of Star Graph.
    */
    let adjList = [];
    for (let i = 0; i < edges.length; i++) {
        let el = edges[i];
        if (adjList[el[0]]) {
            adjList[el[0]].push(el[1]);
        } else {
            adjList[el[0]] = [el[1]]
        }

        if (adjList[el[1]]) {
            adjList[el[1]].push(el[0]);
        } else {
            adjList[el[1]] = [el[0]]
        }
    }

    let maxCount = 0;
    let maxVal = -1;
    for (let i = 1; i < adjList.length; i++) {
        if (adjList[i].length > maxCount) {
            maxCount = adjList[i].length;
            maxVal = i;
        }
    }
    return maxVal;

};