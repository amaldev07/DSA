/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s.length == 1) return s;
    let lp = 0;
    let rp = s.length - 1;
    let mid = Math.floor(s.length);
    while (lp <= mid && rp >= s.length - mid) {
        if (isWowel(s[lp]) && isWowel(rp)) {
            swap(lp, rp);
            lp = lp + 1;
            rp = rp - 1;
        } else if (isWowel(lp)) {
            rp = rp - 1;
        } else {
            lp = lp + 1;
        }
    }
    return s;
};