function isValidJs(s) {
    debugger;
    if (s.length === 0) return true;
    if (s.length % 2 === 1) return false;
    let paraths = {
        '}': '{',
        ')': '(',
        ']': '[',
    };
    let openParaths = ['(', '[', '{']
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (openParaths.includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (paraths[s[i]] == stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length > 0 ? false : true;;
};
isValidJs("([}}])");