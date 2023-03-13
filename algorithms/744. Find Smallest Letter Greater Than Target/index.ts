function nextGreatestLetter(letters: string[], target: string): string {
    let s = 0;
    let e = letters.length - 1;
    while (s <= e) {
        let m = Math.floor(s + ((e - s) / 2));
        if (target < letters[m]) {
            e = m - 1;
        } else {
            s = m + 1;
        }
    }
    return letters[s % (letters.length)];
};