function divisibilityArray(word: string, m: number): number[] {
    let out: number[] = [];
    let carry = 0;
    let initalWrdLength = word.length;
    let i = 0;
    while (i < initalWrdLength) {
        carry = carry * 10;
        let no = carry + (+word.charAt(0));
        carry = no % m
        word = word.substring(1, initalWrdLength);
        if (carry == 0) {
            out[i] = 1;
        } else {
            out[i] = 0;
        }
        i = i + 1;
    }
    return out;
};