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

function sumNumbers1(root: TreeNode | null): number {
    let result = { sum: 0 };
    let indSum = '';
    dfs1(root, indSum, result);
    return result.sum;
};
function dfs1(node, indSum, result) {
    if (node && node.left == null && node.right == null) {
        indSum = indSum + node.val;
        result.sum = result.sum + (+indSum);
        return +indSum;
    }
    indSum = indSum + node.val;
    if (node.left) dfs1(node.left, indSum, result);
    if (node.right) dfs1(node.right, indSum, result);
}