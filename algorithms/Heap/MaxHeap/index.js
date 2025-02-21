function MaxHeap() {
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

    function swap(index1, index2) {
        [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
    }

    function insert(val) {
        heap.push(val);
        heapifyUp();
        console.log(heap);
    }

    function extractMax() {
        let max = heap[0];
        heap[0] = heap.pop();
        heapifyDown();
        return max;
    }

    function heapifyUp() {
        let index = heap.length - 1;
        while (index > 0) {
            let parentIndex = getParentIndex(index);
            if (heap[parentIndex] < heap[index]) {
                swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    return { insert }
}

let maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);