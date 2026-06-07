/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    let rows = heights.length;
    let columns = heights[0].length;
    let effort = Array.from({ length: rows }, () => Array(columns).fill(Infinity));
    let heap = new MyMinHeap();

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
            const newCol = column + dc;
            if (
                newRow < 0 ||
                newRow >= rows ||
                newCol < 0 ||
                newCol >= columns
            ) {
                continue;
            }

            let newEffort = Math.max(currentEffort, Math.abs(heights[newRow][newCol] - heights[row][column]));
            if (newEffort < effort[newRow][newCol]) {
                effort[newRow][newCol] = newEffort;
                heap.insert([newRow, newCol, newEffort]);
            }
        }
    }
    return effort[rows - 1][columns - 1];
};

class MyMinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    insert([row, column, effort]) {
        this.heap.push([row, column, effort]);
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0) {
            if (this.heap[parentIndex][2] <= this.heap[index][2]) {
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
            let minIndex = index;
            let leftChildIndex = (index * 2) + 1;
            let rightChildIndex = (index * 2) + 2;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][2] < this.heap[minIndex][2]) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][2] < this.heap[minIndex][2]) {
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