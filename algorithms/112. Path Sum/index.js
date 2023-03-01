
function hasPathSum(root, targetSum) {
    debugger;
    if (root == null) {
        return false;
    }
    return rec(root, targetSum, 0);
};
function rec(root, targetSum, sum) {
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
hasPathSum(result.root, 6);