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


function hasPathSum1(root: TreeNode | null, targetSum: number): boolean {
    if (root == null) {
        return false;
    }
    return rec(root, targetSum, 0);
};
function rec1(root: TreeNode | null, targetSum: number, sum: number): boolean {
    if (root == null) {
        if (sum == targetSum) {
            return true;
        }
        return false;
    }
    if (sum == 0 && ((sum + root.val) == targetSum)) {
        if (!root.left && !root.right) {
            return true;
        }
        return false;
    }
    sum = sum + root.val;
    let leftRec = rec(root.left, targetSum, sum);
    let rightRec = rec(root.right, targetSum, sum);
    return leftRec || rightRec;
}