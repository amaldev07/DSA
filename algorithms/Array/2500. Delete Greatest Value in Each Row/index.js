
var deleteGreatestValue = function (grid) {
    let sum = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i].sort((a, b) => b - a);

    }
    for (let i = 0; i < grid[0].length; i++) {
        let max = 0;
        for (let j = 0; j < grid.length; j++) {
            max = Math.max(max, grid[j][i]);
        }
        sum = sum + max;
    }
    return sum;
};
deleteGreatestValue([[1, 2, 4], [3, 3, 1]])