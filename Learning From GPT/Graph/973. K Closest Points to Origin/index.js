/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let heap = new MyMaxHeap();
    for (let [x, y] of points) {
        heap.insert([x, y, getDistance(x, y)]);
        if (heap.size() > k) {
            heap.removeMax();
        }
    }

    let closestDistances = [];
    for (let [x, y, distance] of heap.heap) {
        closestDistances.push([x, y]);
    }
    return closestDistances;
};

function getDistance(x, y) {
    return Math.sqrt(x ** 2 + y ** 2);
}

class MyMaxHeap {
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

    insert([x, y, distance]) {
        this.heap.push([x,y,distance]);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex][2] >= this.heap[index][2]) {
                break;
            }
            let temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;

            index = parentIndex;
        }
    }

    removeMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (true) {
            let maxIndex = index;
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            if (leftIndex < this.heap.length &&
                this.heap[leftIndex][2] > this.heap[maxIndex][2]
            ) {
                maxIndex = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex][2] > this.heap[maxIndex][2]
            ) {
                maxIndex = rightIndex;
            }

            if (maxIndex === index) {
                break;
            }

            let temp = this.heap[index];
            this.heap[index] = this.heap[maxIndex];
            this.heap[maxIndex] = temp;

            index = maxIndex;
        }
        return max;
    }
    showHeap() {
        return this.heap;
    }
}
