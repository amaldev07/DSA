// find maximum sum in a sub array 
// Input  : arr[] = {100, 200, 300, 400}, k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

// Input  : arr[] = {2, 3}, k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole array is 2.

// let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
// let k = 4; widnow size
function maxSum(arr: number[], k: number): number {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum = sum + arr[i];
    }
    max = sum;
    for (let i = k; i < arr.length; i++) {
        sum = sum + arr[i] - arr[i - k];
        max = Math.max(max, sum);
    }
    return max;
}