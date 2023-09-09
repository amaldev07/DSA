function divisibilityArray1(word, m) {
    debugger;
    let out = [];
    let carry = 0;
    let length = word.length;
    let i = 1;
    while (word.length > 0) {
        carry = carry * 10;
        let no = carry + (+word.charAt(0));
        word = word.substring(1, length);
        if (no % m == 0) {
            out[i - 1] = 1;
            carry = 0;
        } else {
            carry = no % m;
            out[i - 1] = 0;
        }
        i = i + 1;
    }
    return out;
};