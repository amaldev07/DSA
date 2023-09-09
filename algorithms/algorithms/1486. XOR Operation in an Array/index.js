function xorOperation(n, start) {
    let xor = start;
    for (let i = 1; i < n; i++) {
        let el = start + (2 * i);
        xor = xor ^ el;
    }
    return xor;
};