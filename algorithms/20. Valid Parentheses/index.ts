// https://leetcode.com/problems/valid-parentheses/
// https://www.youtube.com/watch?v=9kmUaXrjizQ
function isValid(s: string): boolean {
    if (s.length === 0) return true;
    if (s.length % 2 === 1) return false;
    let paraths = {
        '{': '}',
        '(': ')',
        '[': ']',
    };
    let end = Math.floor(s.length / 2);
    let start = end - 1;
    while (start >= 0) {
        if (s[end] !== paraths[s[start]]) {
            return false;
        }
        start = start - 1;
        end = end + 1;
    }
    return true;
};