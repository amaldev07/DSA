
function preorderTraversal(root: TreeNode | null): number[] {
    let preArr = [];
    dfs(root, preArr);
    return preArr;
};
function dfs(root: TreeNode | null, arr: number[]) {
    if (root == null) {
        return;
    }
    arr.push(root.val);
    dfs(root.left, arr);
    dfs(root.right, arr);
}