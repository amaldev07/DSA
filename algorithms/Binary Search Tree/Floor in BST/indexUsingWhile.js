/* Given a BST and a number X, find Floor of X.
Note: Floor(X) is a number that is either equal to X or is immediately less than X.

If Floor could not be found, return -1. */
function findFloor(root, val) {
    let floor = -1;
    while (root != null) {
        if (root.val == val) {
            floor = root.val;
            return floor;
        }
        if (val > root.val) {
            floor = root.val;
            root = root.right;
        } else {
            root = root.left;
        }
    }
    return floor;
}



