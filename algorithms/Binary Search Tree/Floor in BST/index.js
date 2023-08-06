/* Given a BST and a number X, find Floor of X.
Note: Floor(X) is a number that is either equal to X or is immediately less than X.

If Ceil could not be found, return -1. */
function findFloor(root, val) {
    let Floor = -1;
    return bstFloor(root, val, ceil);
}
function bstFloor(root, val, ceil) {
    if (root == null) return ceil;
    if (root.val == val) return root;
    if (val > root.val) {
        Floor = root.val;
        return bstFloor(root.right, val, ceil);
    } else {
        return bstFloor(root.left, val, ceil);
    }
}

