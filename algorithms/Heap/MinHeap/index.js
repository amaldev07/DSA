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

    function swap(parentIndex, index) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    }

    function insert(val) {
        heap.push(val);
        heapifyUp();
        console.log(heap);
    }

    function extractMin() {
        if (heap.length == 0) return null;
        if (heap.length == 1) return heap.pop();
        let min = heap[0];
        heap[0] = heap.pop();
        heapifyDown();
        console.log(heap);
        return min;
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

    function heapifyDown() {
        let index = 0;
        if (getLeftChildIndex(index) <= heap.length - 1) {
            let leftIndex = getLeftChildIndex(index);
            let minValueIndex = leftIndex;
            let rightIndex = getRightChildIndex(index);

            if (rightIndex > heap.length - 1) {
                minValueIndex = leftIndex;
            } else {
                if (heap[rightIndex] > heap[leftIndex]) {
                    minValueIndex = leftIndex;
                }
            }
            if (heap[index] > heap[minValueIndex]) {
                swap(index, minValueIndex);
            }
            index = minValueIndex;
        }

    }

    return { insert, extractMin };
}

let minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(9);
minHeap.insert(8);
minHeap.insert(7);
minHeap.extractMin();

