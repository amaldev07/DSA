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

// function postorder(root: Node | null): number[] {
function postorder(root) {
    let ar = [];
    dfs(root, ar);
    return ar;
};
function dfs(node, ar) {
    if (node == null) return;
    for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i], ar);
    }
    ar.push(node.val);
}