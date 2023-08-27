function wordPattern(pattern, s) {
    let hm = new Map();
    let sAry = s.split(" ");
    for (let i = 0; i < sAry.length; i++) {
        let letter = pattern[i];
        if (hm.get(letter) == null) {
            hm.set(letter, sAry[i])
        } else {
            let hmItem = hm.get(letter);
            if (hmItem != sAry[i]) return false;
        }
    }
    return true;
};