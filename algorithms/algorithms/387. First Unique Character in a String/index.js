function firstUniqChar(s) {
    let ar = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - "a".charCodeAt(0);
        ar[index] = ar[index] + 1;
    }
    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - "a".charCodeAt(0);
        if (ar[index] == 1) return i;
    }
    return -1;
};