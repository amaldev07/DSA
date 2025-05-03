//{ Driver Code Starts
'use strict';

function main() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let input = [];
    readline.on("line", (line) => { input.push(line); });

    readline.on("close", () => {
        let index = 0;
        let tc = parseInt(input[index++]);
        while (tc-- > 0) {
            let V = parseInt(input[index++]);
            let E = parseInt(input[index++]);
            let edges = [];
            for (let i = 0; i < E; i++) {
                let [u, v] = input[index++].split(" ").map(Number);
                edges.push([u, v]);
            }

            let obj = new Solution();
            let ans = obj.isCyclic(V, edges);
            console.log(ans ? "true" : "false");
            console.log("~");
        }
    });
}

main();
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {boolean}
 */
class Solution {
    isCyclic(V, edges) {
        let vis = new Array(V).fill(0);
        let path = new Array(v).fill(0);
        for (let i = 0; i < V; i++) {
            if (vis[i] === 0) {
                vis[i] = 1;
                path[i] = 1;
                if (this.dfs(i, vis, path, edges)) {
                    return true;
                }
            }
        }
    }
    dfs(node, vis, path, edges) {
        for (let i = 0; i < edges.length; i++) {
            if (edges[i][0] === node) {
                let child = edges[i][1];
                if (vis[child] === 0) {
                    vis[child] = 1;
                    path[child] = 1;
                    if (this.dfs(child, vis, path, edges)) {
                        return true;
                    }
                } else if (path[child] === 1) {
                    return true;
                }
            }
        }
        path[node] = 0;
        return false;
    }
}