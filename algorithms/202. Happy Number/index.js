function isHappy(n) {
    debugger;
    let m = new Map();
    m.set(n, 1);
    while (n != 1) {
        let temp = n;
        let sum = 0;
        while (temp != 0) {
            sum = sum + Math.pow(temp % 10, 2);
            temp = Math.floor(temp / 10);
        }
        n = sum;
        if (m.get(temp) >= 1) {
            return false;
        } else {
            m.set(n, 1);
        }

    }
    return true;
};
isHappy(19);