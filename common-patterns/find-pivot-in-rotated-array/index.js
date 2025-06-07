function findPivot(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1; // move right
        } else {
            right = mid; // move left
        }
    }
    return left; // index of the pivot
}
/* 
1,2,3,4,5,6,7,8,9
when it rotates
6,7,8,9,1,2,3,4,5
here pivot is 1
that is from there it rotated
to find pivot we can use the above function
*/

