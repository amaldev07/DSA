/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let heap = new MyMinHeap();
    let arry = nums.map((value, index) => [value, index]);
    for (let i = 0; i < arry.length; i++) {
        heap.insert(arry[i]);
        if (heap.size() > k) {
            heap.removeMin();
        }
    }

    let kElements = heap.heap.sort((a, b) => a[1] - b[1]);
    let result = [];
    for (let [value, index] of kElements) {
        result.push(value);
    }
    return result;
};
class MyMinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex][0] <= this.heap[index][0]) {
                break;
            }
            let temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;

            index = parentIndex;
        }
    }

    removeMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (true) {
            let smallest = index;
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            if (leftIndex < this.heap.length &&
                this.heap[leftIndex][0] < this.heap[smallest][0]
            ) {
                smallest = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex][0] < this.heap[smallest][0]
            ) {
                smallest = rightIndex;
            }

            if (smallest === index) {
                break;
            }

            let temp = this.heap[index];
            this.heap[index] = this.heap[smallest];
            this.heap[smallest] = temp;

            index = smallest;
        }
        return min;
    }
    showHeap() {
        return this.heap;
    }
}