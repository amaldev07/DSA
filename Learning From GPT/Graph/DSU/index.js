function find(node, parent) {
    while (parent[node] !== node) {
        node = parent[node];
    }
    return node;
}