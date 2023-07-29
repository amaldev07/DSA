/* Given a BST and a number X, find Ceil of X.
Note: Ceil(X) is a number that is either equal to X or is immediately greater than X.

If Ceil could not be found, return -1. */
function findCeil(root, val) {
    let ceil = -1;
    while (root != null) {
        if (val > root.val) {
            root = root.right;
        } else {
            ceil = root.val;
            root = root.left;
        }
    }
    return ceil;
}



