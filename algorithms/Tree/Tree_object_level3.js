/* 
here is a tree object in javascript 
with level 3 elements
created using chat gpt
 */
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const rootNode = new TreeNode(1);

rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);

rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);
rootNode.right.left = new TreeNode(6);
rootNode.right.right = new TreeNode(7);

export let root = { rootNode };
