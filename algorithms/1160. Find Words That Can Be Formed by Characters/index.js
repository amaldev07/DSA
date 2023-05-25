function countCharacters(words, chars) {
    let hm = new Map()
    for (let i = 0; i < chars.length; i++) {
        hm.set(chars[i], ((hm.get(chars[i]) || 0) + 1));
    }
    let sum = 0;
    let flag = true;
    for (let i = 0; i < words.length; i++) {
        flag = true;
        let cloneHm = new Map(hm);
        for (let j = 0; j < words[i].length; j++) {
            if (cloneHm.get(words[i][j]) && cloneHm.get(words[i][j]) > 0) {
                cloneHm.set(words[i][j], (cloneHm.get(words[i][j]) - 1));
            } else {
                flag = false;
                break;
            }
        }
        if (flag) sum = sum + words[i].length;
    }
    return sum;
};