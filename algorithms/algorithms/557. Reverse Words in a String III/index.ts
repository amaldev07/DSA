function reverseWords(s: string): string {
    let newS = '';
    let wrd = '';
    let i = 0;
    while (i < s.length) {
        if (s[i] == ' ') {
            newS = newS + (newS.length > 0 ? ' ' : '') + wrd;
            wrd = '';
        } else if (i == s.length - 1) {
            wrd = s[i] + wrd;
            newS = newS + (newS.length > 0 ? ' ' : '') + wrd;
        } else {
            wrd = s[i] + wrd;
        }
        i = i + 1;
    }
    return newS;
};