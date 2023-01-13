/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root) {
    return dfs(root);
};
function dfs(root) {
    if (root == null) {
        return 0;
    }
    let depths = [];
    if (root.children.length == 0) return 1;
    for (let i = 0; i < root.children.length; i++) {
        depths.push(dfs(root.children[i]))
    }
    return 1 + Math.max(...depths);
}