const findLeaves = root => {
    let ret = []
    let index = 0
    
    const isLeaf = node => node && !node.left && !node.right
    
    const storeLeaf = node => {
      const arr = ret[index] || []
      arr.push(node?.val)
      ret[index] = arr
    }
    
    const dfs = node => {
      if (!node) return
      
      if (isLeaf(node.left)) {
        storeLeaf(node.left)
        node.left = null
      }
      else {
        dfs(node.left)
      }
      if (isLeaf(node.right)) {
        storeLeaf(node.right)
        node.right = null
      }
      else {
        dfs(node.right)
      }
    }
    
    // Keep iterating untill the root becomes leaf and store it as last item in ret
    while (!isLeaf(root)) {
      dfs(root)
      index++
    }
    storeLeaf(root)
  
    return ret
  }