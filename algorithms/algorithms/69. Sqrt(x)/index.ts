function mySqrt(x: number): number {
    if (x < 2) {
        return x;
    }
    let s = 2;
    let e = Math.floor(x / 2);
    while (s <= e) {
        let mid = Math.floor(s + ((e - s) / 2));
        if ((mid * mid) < x) {
            s = mid + 1;
        } else if ((mid * mid) > x) {
            e = mid - 1;
        } else {
            return mid;
        }
    }
    return e;
};