class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function maxPathSum(root: TreeNode | null): number {
    let max = { sum: Number.NEGATIVE_INFINITY }
    dfs(root, max);
    return max.sum;
};
function dfs(root: TreeNode | null, max) {
    if (root == null) {
        return 0;
    }
    let l = Math.max(0, dfs(root.left, max));
    let r = Math.max(0, dfs(root.right, max));
    max.sum = Math.max(max.sum, (l + r + root.val))
    return root.val + Math.max(l, r);
}