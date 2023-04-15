
function maxDepth(root: TreeNode | null): number {
    return dfsMaxDepth(root);
};
function dfsMaxDepth(root: TreeNode | null) {
    if (root == null) {
        return 0;
    }
    let l = dfsMaxDepth(root.left);
    let r = dfsMaxDepth(root.right);
    return 1 + Math.max(l, r);
}