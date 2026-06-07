const graph = [
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2]
];

const visited = new Array(graph.length).fill(0);

function dfs(node) {
    if(visited[node]) return;

    console.log(node);
    visited[node] = 1;
    for(let item of graph[node]){
        dfs(item);
    }
}

dfs(0);