function validWordSquare(words: string[]): boolean {
    let arr: any = [];
    // let words = ["abcd","bnrt","crmy","dtye"];
    let maxLen = words[0].length;
    for (let k = 0; k < words.length; k++) {
        if (maxLen < words[k].length) {
            maxLen = words[k].length;
        }
        arr[k] = words[k].split('');
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = i; j < words.length; j++) {
            if (arr[i][j] != arr[j][i]) {
                return false;
            }
        }
    }
    return true;
};