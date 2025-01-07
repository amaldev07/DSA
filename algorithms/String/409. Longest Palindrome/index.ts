function longestPalindrome(s: string): number {
    let countMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (countMap.has(s[i])) {
            countMap.set(s[i], countMap.get(s[i]) + 1);
        } else {
            countMap.set(s[i], 1);
        }
    }
    let count = 0;
    countMap.forEach((value, key) => {
        count = count + value - value % 2;
    });

    if (s.length == count) return count
    return count + 1;
};