
/* function sumOfLeftLeaves(root) {
    return dfsSum(root);
};
function dfsSum(root) {
    let l = 0;
    let r = 0;
    if (root.left) {
        if (isLeaf(root?.left)) {
            l = root?.left?.val;
        } else {
            l = dfsSum(root && root?.left);
        }
    }
    if (root.right) {
        if (isLeaf(root?.right)) {
            r = 0;
        } else {
            r = dfsSum(root && root?.right);
        }
    }
    return l + r;
}


function isLeaf(node) {
    if (node && !node.left && !node.right) {
        return true;
    }
    return false;
} */