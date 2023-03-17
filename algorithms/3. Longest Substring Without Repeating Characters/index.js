function lengthOfLongestSubstringJs(s) {
    debugger;
    if (s.length <= 1) {
        return s.length;
    }
    let st = 0;
    let e = 0;
    let count = 1;
    let max = 1;
    let subStr = s[0];
    while (e < s.length - 1) {
        if (!subStr.includes(s[e + 1])) {
            e = e + 1;
            count = count + 1;
            subStr = s.substring(st, e + 1);
            max = Math.max(max, count);
        } else {
            st = st + 1;
            e = e + 1;
            subStr = s.substring(st, e + 1);
            count = subStr.length;
            max = Math.max(max, subStr.length);
        }
    }
    return max;
};
lengthOfLongestSubstring('pwwkew');