/**
 * Definition for a rope tree node.
 * class RopeTreeNode {
 *     constructor(len, val, left, right) {
 *         this.len = (len===undefined ? 0 : len);
 *         this.val = (val===undefined ? "" : val);
 *         this.left = (left===undefined ? null : left);
 *         this.right = (right===undefined ? null : right);
 *     }
 * }
 */
/**
 * @param {RopeTreeNode} root
 * @param {number} k
 * @return {character}
 */
var getKthCharacter = function (root, k) {
    let s = dfs(root);
    return s[k - 1];
};
function dfs(node) {
    if (!node) return '';
    if (node.val && !node.left && !node.right) {
        return node.val;
    }
    let l = dfs(node.left);
    let r = dfs(node.right);
    return l + r;
}