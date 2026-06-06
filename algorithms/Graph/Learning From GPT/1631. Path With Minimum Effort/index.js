/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    let rows = heights.length;
    let columns = heights[0].length;
    let effort = Array.from({ length: rows }, () => { Array(columns).fill(Infinity) });
    let heap = new MinHeap();

    effort[0][0] = 0;
    heap.insert([0, 0, 0])
    let edges = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ];
    while (heap.size() > 0) {
        let [row, column, currentEffort] = heap.removeMin();
        if (currentEffort > effort[row][column]) {
            continue;
        }
        /* if (row == rows - 1 && column == columns - 1) {
            return currentEffort;
        } */
        for (let [dr, dc] of edges) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (
                newRow < 0 ||
                newRow >= rows ||
                newCol < 0 ||
                newCol >= cols
            ) {
                continue;
            }

            let newEffort = Math.max(currentEffort, Math.abs(heights[newRow][newCol] - heights[row][column]));
            if (newEffort < effort[newRow][newCol]) {
                effort[newRow][newCol] = newEffort;
                heap.push([newRow, newCol, newEffort]);
            }
        }
    }
};

class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.size;
    }
    peek() {
        retunr
        this.heap[0];
    }
    removeMin() {

    }
    insert([row, column, effort]) {
        this.heap, push(value);
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0) {
            if (this.heap[parentIndex][2] < this.heap[index][2]) {
                break;
            }

            let temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;
            index = parentIndex;
        }

    }
    removeMin() {
        let min = this.heap[0];
        this.heap[0] = this.heap[n - 1];
        let index = 0;
        while (true) {
            let minIndex = index;
            let leftChildIndex = (index * 2) + 1;
            let rightChildIndex = (index * 2) + 2;
            if (this.heap[leftChildIndex][2] < this.heap[index][2]) {
                minIndex = leftChildIndex;
            }

            if (this.heap[rightChildIndex][2] < this.heap[index][2]) {
                minIndex = rightChildIndex;
            }
            if (minIndex == index) break;

            let temp = this.heap[minIndex];
            this.heap[minIndex] = this.heap[index];
            this.heap[index] = temp;
            index = minIndex;
        }
        return min;
    }
}