function MinHeap() {
    heap = [];
    function getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    function getLeftChildIndex(i) {
        return ((i * 2) + 1);
    }
    function getRightChildIndex(i) {
        return ((i * 2) + 2);
    }

    function insert(val) {
        heap.push(val);
        heapifyUp();
        console.log(heap);
    }
    function heapifyUp() {
        let index = heap.length - 1;
        while (index > 0) {
            let parentIndex = getParentIndex(index);
            if (heap[parentIndex] > heap[index]) {
                swap(parentIndex, index);
            }
            index = parentIndex;
        }
    }
    function swap(parentIndex, index) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    }

    return { insert };
}

/* let minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(9);
minHeap.insert(8);
minHeap.insert(7); */

