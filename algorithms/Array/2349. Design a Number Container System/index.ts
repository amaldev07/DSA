var NumberContainers = function() {
    // The key is using a set to store if a index can be used or not

    // PHASE 01: Initialize two maps
    this.map = new Map()  // Stores numbers and their corresponding indices
    this.pos = new Map()  // Tracks the number associated with each index
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    // PHASE 02: Remove the previous mapping if the index already exists
    if (this.pos.has(index)) {
        let p = this.pos.get(index)
        let { heap, set } = this.map.get(p)
        set.delete(index)  // Remove index from the previous set
    }

    // PHASE 03: Add new mapping
    if (!this.map.has(number)) {
        this.map.set(number, {
            heap: new MinPriorityQueue(),  // Min-heap to store indices
            set: new Set()  // Set to track valid indices
        })
    }

    // PHASE 04: Update heap and set
    let { heap, set } = this.map.get(number)
    heap.enqueue(index)  // Insert index into the priority queue
    set.add(index)  // Track the index in the set
    this.pos.set(index, number)  // Update the mapping of index to number
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    // PHASE 05: Return -1 if the number is not present
    if (!this.map.has(number)) return -1

    let { heap, set } = this.map.get(number)

    // PHASE 06: Remove invalid indices from the heap
    while (heap.front() && !set.has(heap.front().element)) {
        heap.dequeue()
    }

    // PHASE 07: Return the smallest valid index or -1 if none exists
    return (heap.front() && heap.front().element) || -1
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */