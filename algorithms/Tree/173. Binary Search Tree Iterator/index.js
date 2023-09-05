/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    stack;
    constructor(root: TreeNode | null) {
        this.stack = [];
        while(root){
          this.stack.push(root);
          root = root.left;
        }
    }

    next(): number {
      if(this.stack.length>0){
        let el = this.stack.pop();
        let ref = el.right;
        while(ref){
          this.stack.push(ref);
          ref= ref.left;
        }
        return el.val;
      }    
    }

    hasNext(): boolean {
      return this.stack.length>0
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */