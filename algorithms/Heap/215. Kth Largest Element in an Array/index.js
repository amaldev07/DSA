/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let maxHeap = new MaxHeap();
    for (let i = 0; i < nums.length; i++) {
        maxHeap.insert(nums[i]);
    }
    let maxVal;
    for (let i = 0; i < k; i++) {
        maxVal = maxHeap.extractMax();
    }
    return maxVal;
};

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
        console.log(heap);
        return max;
    }

    function heapifyDown() {
        let index = 0;
        let length = heap.length;
        while (getLeftChildIndex(index) < length) {
            let maxValIndex = getLeftChildIndex(index);
            if (getRightChildIndex(index) < length && heap[getRightChildIndex(index)] > heap[getLeftChildIndex(index)]) {
                maxValIndex = getRightChildIndex(index);
            }
            if (heap[index] < heap[maxValIndex]) {
                swap(index, maxValIndex);
                index = maxValIndex;
            } else {
                break;
            }
        }
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
    return { insert, extractMax }
};