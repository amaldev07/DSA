function mainSortByRecursion() {
    let arr = [1, 4, 3, 8, 6];
    let sortedArr = bubbleSortRecursion(arr, arr.length, 0);
    console.log('Sorted array', sortedArr);
}
function bubbleSortRecursion(arr, r, c) {
    if (r == 0) {
        return;
    }
    if (c < r) {
        // console.log("*");
        if (arr[c] > arr[c + 1]) { //swap
            let temp = arr[c];
            arr[c] = arr[c + 1];
            arr[c + 1] = temp;
        }
        bubbleSortRecursion(arr, r, c + 1);
    } else {
        bubbleSortRecursion(arr, r - 1, 0);
    }
    return arr;
}