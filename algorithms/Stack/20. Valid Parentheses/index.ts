function isValid(s: string): boolean {
    let paraMap = new Map();
    paraMap.set("}", "{")
    paraMap.set(")", "(")
    paraMap.set("]", "[")

    let paraStack = [];
    for (let i = 0; i < s.length; i++) {
        let el = s[i];
        if (paraMap.get(s[i])) {
            let lastStackEl = paraStack.pop();
            if (lastStackEl != paraMap.get(el)) {
                return false;
            }
        } else {
            paraStack.push(el);
        }
    }
    if (paraStack.length > 0) return false;
    return true;
};