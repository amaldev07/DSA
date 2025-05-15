function rotate(arr, n) {
    for (let i = 0; i < n; i++) {
        let lastel = arr.pop();
        arr.unshift(lastel);
    }
    return arr;
}
rotate([1,2,3,4,5], 2)