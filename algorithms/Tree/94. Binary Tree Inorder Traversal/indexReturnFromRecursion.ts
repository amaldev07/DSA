
/* Definition for a binary tree node. */
/* class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
} */


function inorderTraversal(root: TreeNode | null): number[] {
    let iArr = [];
    return dfs(root, iArr);
};
function dfs(root: TreeNode | null, arr: number[]): number[] {
    if (root == null) {
        return [];
    }
    dfs(root.left, arr);
    arr.push(root.val);
    dfs(root.right, arr);
    return arr
}