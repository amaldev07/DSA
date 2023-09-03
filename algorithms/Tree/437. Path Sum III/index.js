/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function pathSum(root, targetSum) {
    let out = [0]
    dfs(root, targetSum, out);
    return out[0];
};
function dfs(node, targetSum, out) {
    if (node == null) return;
    helper(node, 0, targetSum, out);
    dfs(node.left, targetSum, out);
    dfs(node.right, targetSum, out);
}
function helper(node, sum, t, out) {
    if (node == null) return;
    if (node.left == null && node.right == null) {
        sum = sum + node.val;
        if (sum == t)  out[0] =  out[0] + 1;
        console.log(  "xxxx---xx" + out[0])
        return;
    }
    sum = sum + node.val;
    console.log(node.val + "---" + sum)
    if (sum == t)  out[0]=  out[0]+ 1;
    console.log(  "xxxx---" +  out[0])
    if (node.left) helper(node.left, sum, t, out);
    if (node.right) helper(node.right, sum, t, out);
}