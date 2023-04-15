class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function arrayToTree(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) {
      return null;
    }
    const root = new Node(arr[i]);
    root.left = arrayToTree(arr, 2 * i + 1);
    root.right = arrayToTree(arr, 2 * i + 2);
    return root;
  }

  const arr = [1, 2, 3, 4, null, 5, 6];
const root = arrayToTree(arr);