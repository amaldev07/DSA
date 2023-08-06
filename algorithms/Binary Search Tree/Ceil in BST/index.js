/* Given a BST and a number X, find Ceil of X.
Note: Ceil(X) is a number that is either equal to X or is immediately greater than X.

If Ceil could not be found, return -1. */
function findCeil(root, val) {
    let ceil = -1;
    return bstCeil(root, val, ceil);
}
function bstCeil(root, val, ceil) {
    if (root == null) return ceil;
    if (root.val == val) return root;
    if (val > root.val) {
        return bstCeil(root.right, val, ceil);
    } else {
        ceil = root.val;
        return bstCeil(root.left, val, ceil);
    }
}

