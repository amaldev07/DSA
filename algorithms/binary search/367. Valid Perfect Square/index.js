function isPerfectSquare(num) {
    debugger;
    let s = 1;
    let e = num;
    while (s <= e) {
        let mid = Math.floor((s + (e - s)/2));
        let sqr = mid * mid;
        if (sqr == num) {
            return true;
        } else if (sqr > num) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return false;
};
isPerfectSquare(16);