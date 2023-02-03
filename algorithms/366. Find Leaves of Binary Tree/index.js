function findLeaves(root) {
    let ret = [];
    let index = 0;
    function isLeaf(node) {
        return (node && !node.left && !node.right) ? true : false;
    }
    function storeLeaf(leaf) {
        let arr = ret[index] || [];
        arr.push(leaf.val);
        ret[index] = arr;
    }

    function dfs(node) {
        if (!node) return;
        if (isLeaf(node.left)) {
            storeLeaf(node.left);
            node.left = null;
        } else {
            dfs(node.left);
        }
        if (isLeaf(node.right)) {
            storeLeaf(node.right);
            node.right = null;
        } else {
            dfs(node.right);
        }
    }

    while (!isLeaf(root)) {
        dfs(root);
        index++;
    }
    storeLeaf(root);
    return ret;
}