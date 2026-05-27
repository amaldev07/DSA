const graph = [
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2]
];

const visited = new Set();

function dfs(node) {
    if(visited.has(node)) return;

    console.log(node);
    visited.add(node);
    for(let item of graph[node]){
        dfs(item);
    }
}

dfs(0);