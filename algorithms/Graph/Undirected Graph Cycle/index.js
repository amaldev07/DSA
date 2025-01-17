
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */
class Solution {
    // Function to detect cycle in an undirected graph.

    isCycle(adj) {
        let vis = new Array(adj.length).fill(0);
        for (let i = 0; i < adj.length; i++) {
            if (vis[i] == 0) {
                if (this.dfs(i, -1, vis, adj)) {
                    return true;
                };
            }
        }
        return false;
    }
    dfs(node, parent, vis, adj) {
        vis[node] = 1;
        let elements = adj[node];
        for (let i = 0; i < elements.length; i++) {
            if (vis[elements[i]] == 0) {
                if (this.dfs(elements[i], node, vis, adj)) {
                    return true;
                }
            } else if (elements[i] !== parent) {
                return true;
            }
        }
        return false;
    }
}