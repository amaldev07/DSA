/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root) {
    let out = [];
    dfs(root, out);
    return out;
};
function dfs(node, out) {
    if (node == null) return;
    out.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i], out);
    }
};