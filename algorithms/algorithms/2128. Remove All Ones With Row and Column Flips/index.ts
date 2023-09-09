// let sample = [[0, 0, 0], [1, 1, 1]];
let sample = [[1, 1, 0, 0, 0]];
function sumArray(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }
    return sum;
}
function removeOnes(grid: number[][]): boolean {
    debugger;
    let c = grid.length;
    for (let i = 0; i < grid[0].length; i++) {
        if (grid[0][i] == 1) {
            for (let j = 0; j < c; j++) {
                grid[j][i] = grid[j][i] == 1 ? 0 : 1;
            }
        }
    }
    let flag = 0;
    for (let i = 0; i < c; i++) {
        if (sumArray(grid[i]) != 0 && sumArray(grid[i]) != grid[0].length) {
            flag = 1;
        }
    }
    return flag == 0 ? true : false;
};
removeOnes(sample);
