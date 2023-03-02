function toLowerCase(s: string): string {
    let diff = 0;
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            diff = s.charCodeAt(i) - 65;
            let newCh = String.fromCharCode(97 + diff);
            newStr = newStr + newCh;
        } else {
            newStr = newStr + s[i];
        }
    }
    return newStr;
};