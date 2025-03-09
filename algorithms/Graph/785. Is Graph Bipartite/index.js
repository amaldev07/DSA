/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let vis = [];

    for (let i = 0; i < graph.length; i++) {
        vis[i] = -1;
    }
    for (let i = 0; i < graph.length; i++) {
        if (vis[i] == -1) {
            if (check(graph, vis, i) == false) {
                return false;
            }
        }
    }
    return true;
}

var check = function (graph, vis, start) {
    let q = [];

    q.push(start);
    vis[start] = 0;
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
// [[], [2, 4, 6], [1, 4, 8, 9], [7, 8], [1, 2, 8, 9], [6, 9], [1, 5, 7, 8, 9], [3, 6, 9], [2, 3, 4, 6, 9], [2, 4, 5, 6, 7, 8]]
// let graph1 = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]
// isBipartite(graph);