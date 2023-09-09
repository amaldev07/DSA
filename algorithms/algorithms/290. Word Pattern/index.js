function wordPattern(pattern, s) {
    let hm = new Map();
    let whm = new Map();
    let sAry = s.split(" ");
    if (pattern.length != sAry.length) return false;
    for (let i = 0; i < sAry.length; i++) {
        let letter = pattern[i];
        if (hm.get(letter) == null) {
            hm.set(letter, sAry[i])
            if (whm.get(sAry[i]) != null) return false;
            whm.set(sAry[i], letter)
        } else {
            let hmItem = hm.get(letter);
            if (hmItem != sAry[i]) return false;
        }
    }
    return true;
};