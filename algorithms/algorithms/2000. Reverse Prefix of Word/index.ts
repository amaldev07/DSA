function reversePrefix(word: string, ch: string): string {
    let i = 0;
    let newWrd = '';
    let index = word.indexOf(ch);
    if (index <= 0) {
        return word;
    }
    while (i < word.length) {
        if (i <= index) {
            newWrd = word[i] + newWrd;
        } else {
            newWrd = newWrd + word[i];
        }
        i = i + 1;
    }
    return newWrd
};