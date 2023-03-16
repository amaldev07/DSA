// https://leetcode.com/problems/valid-parentheses/
// https://www.youtube.com/watch?v=9kmUaXrjizQ
function isValid(s: string): boolean {
    if (s.length === 0) return true;
    if (s.length % 2 === 1) return false;
    let paraths = {
        '}': '{',
        ')': '(',
        ']': '[',
    };
    let openParaths = ['(', '[', '{']
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (openParaths.includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (paraths[s[i]] == stack[stack.length - 1]) {
                stack.pop();
            }
        }
    }
    return stack.length > 0 ? false : true;;
};