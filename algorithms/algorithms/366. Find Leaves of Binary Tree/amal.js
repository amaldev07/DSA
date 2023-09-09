function findLeaves(node) {
    let index = 0;
    let ret = []
    function isLeaf(node) {
        if (node && node.val && !node.left && !node.right) {
            return true;
        } else {
            return false;
        }
    }
    function storeLeaf(leaf) {
        let arrySet = ret[i] || [];
        arrySet.push(leaf.val);
        ret[index] = arrySet;
    }
    function dfs(node) {
        if (!node) return;
        if (isLeaf(node.left)) {
            storeLeaf(node.left);
            node.left = null;
        } else {
            dfs(node.left)
        }

        if (isLeaf(node.right)) {
            storeLeaf(node.right)
            node.right = null;
        } else {
            dfs(node.right);
        }
    }
}