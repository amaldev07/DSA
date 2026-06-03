/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let heap = new MyMinHeap ();
    for (let no of nums) {
        heap.insert(no);
        if (heap.size() > k) {
            heap.removeMin();
        }
    }
    return heap.peek()
};

class MyMinHeap  {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    insert(val) {
        this.heap.push(val);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) {
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
            let leftChildIndex = (index * 2) + 1;
            let rightChildIndex = (index * 2) + 2;
            let minIndex = index;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
                minIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
                minIndex = rightChildIndex;
            }
            if (index == minIndex) {
                break;
            }

            const temp = this.heap[minIndex];
            this.heap[minIndex] = this.heap[index];
            this.heap[index] = temp;

            index = minIndex;
        }
        return min;
    }
}