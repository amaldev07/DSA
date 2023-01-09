function isStrobogrammatic(num) {
    const hm = new Map([
        ["0", "0"],
        ["1", "1"],
        ["6", "9"],
        ["8", "8"],
        ["9", "6"]
    ]);
    let re = '';
    let tempNum = num;
    for (let i = num.length - 1; i >= 0; i--) {
        let el = num[i];
        if (hm.get(el) == null) return false;
        re = re + hm.get(el);
    }
    return tempNum == re;
};
