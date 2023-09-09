function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    let ms = new Map();
    let mt = new Map();
    for (let i = 0; i < s.length; i++) {
        ms.set(s[i], 1 + (ms.get(s[i]) || 0))
        mt.set(t[i], 1 + (mt.get(t[i]) || 0))
    }
    for (let [key, value] of ms) {
        if (ms.get(key) !== mt.get(key)) {
            return false;
        }
    }
    return true;
};