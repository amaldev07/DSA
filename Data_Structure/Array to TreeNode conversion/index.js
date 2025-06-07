class Node {
    constructor(value) {
        this.val = value;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    inOrderTraversal() {
        const traverse = (root) => {
            if (root == null) {
                return;
            }
            traverse(root.left);
            console.log(root.val);
            traverse(root.right);
        }
        traverse(this.root);
    }
}
function createCompleteBinaryTreeFromArray(arr) {
    const length = arr.length;
    const binaryTree = new BinaryTree();
    const traverseAndReplace = (root, i) => {
        if (i < length) {
            root = new Node(arr[i]);
            root.left = traverseAndReplace(root.left, 2 * i + 1);
            root.right = traverseAndReplace(root.right, 2 * i + 2);
        }
        return root;
    }
    binaryTree.root = traverseAndReplace(binaryTree.root, 0);
    return binaryTree;
}
const result = createCompleteBinaryTreeFromArray([1, 2, null, 3, null, 4, null, 5]);
// result.inOrderTraversal();