/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let letterMap = new Map();
    for (let i = 0; i < s.length; i++) {
        letterMap.set(s[i], (letterMap.get(s[i]) || 0) + 1);
    }
    for (let i = 0; i < t.length; i++) {
        if (!letterMap.has(t[i]) || (letterMap.get(t[i]) == 0)) {
            return t[i];
        } else {
            letterMap.set(t[i], (letterMap.get(t[i])) - 1);
        }
    }
};