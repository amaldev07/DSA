function MinHeap() {
    let heap = [];
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
                index = parentIndex;
            }
            else {
                break;
            }
        }
    }

    function heapifyDown() {
        let index = 0;
        while (getLeftChildIndex(index) <= (heap.length - 1)) {
            let leftIndex = getLeftChildIndex(index);
            let rightIndex = getRightChildIndex(index);
            let minValueIndex = leftIndex;
            if (rightIndex <= heap.length - 1 && heap[rightIndex] < heap[leftIndex]) {
                minValueIndex = rightIndex;
            }
            if (heap[index] > heap[minValueIndex]) {
                swap(index, minValueIndex);
                index = minValueIndex;
            } else {
                break;
            }
        }
    }
    return { insert, extractMin };
}

let minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(9);
minHeap.insert(8);
minHeap.insert(7);
minHeap.insert(6);
minHeap.insert(5);
minHeap.insert(4);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
// minHeap.extractMin();

