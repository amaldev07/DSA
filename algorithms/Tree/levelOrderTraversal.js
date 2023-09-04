function levelOrderTraversal(root) {
    let out = [] // [[1],[2,3],[4,5,6,7]]
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let tempout = [];
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let el = queue.shift();
            tempout.push(el.val);
            if (el.left) queue.push(el.left);
            if (el.right) queue.push(el.right);
        }
        out.push(tempout);
    }
}