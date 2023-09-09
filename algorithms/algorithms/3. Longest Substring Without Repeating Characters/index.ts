function lengthOfLongestSubstring(s: string): number {
    let l = 0;
    let mySet: string[] = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        while (mySet.includes(s[i])) {
            mySet.shift();
            l = l + 1;
        }
        mySet.push(s[i]);
        max = Math.max(max, (i - l) + 1);
    }
    return max;
};