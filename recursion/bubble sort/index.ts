function mainEg() {
    let arr = [1, 4, 3, 8, 6];
    let sortedArray = bubbleSort(arr);
    console.log("sorted array", sortedArray);
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) { //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}