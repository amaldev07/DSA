/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let q = [];
    let vis = [];
    for (let i = 0; i < graph.length; i++) {
        vis[i] = -1;
    }
    q.push(0);
    while (q.length > 0) {
        let n = q.shift();
        let color = vis[n];
        let nextColor = (color == 0) ? 1 : 0;
        for (let i = 0; i < graph[n].length; i++) {
            let el = graph[n][i];
            if (vis[el] == -1) {
                q.push(el);
                vis[el] = nextColor;
            } else if (vis[el] == color) {
                return false;
            }
        }
    }
    return true;
};
let graph = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]
isBipartite(graph);