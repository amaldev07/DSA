/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let arr = [1];
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = arr.length-1; j > 0; j--) {
            arr[j] = arr[j] + arr[j - 1];
        }
        arr.push(1);
    }
    return arr;
};