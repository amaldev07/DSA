function doInorderTraversalIterative(root) {
    let node = root;
    let stack = [];
    let out = [];
    while (true) {
        if (node != null) {
            stack.push(node)
            node = node.left;
        } else {
            if (stack.length <= 0) break;
            node = stack.pop();
            out.push(node.val);
            node = node.right;
        }
    }
    return out;
}
