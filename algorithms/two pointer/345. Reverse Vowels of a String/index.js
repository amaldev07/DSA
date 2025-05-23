/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    let sArr = s.split("");
    if (sArr.length == 1) return s;
    let lp = 0;
    let rp = sArr.length - 1;
    let mid = Math.floor(sArr.length / 2);
    debugger;
    while (lp <= mid && rp >= sArr.length - mid) {
        if (isWowel(sArr[lp]) && isWowel(sArr[rp])) {
            swap(lp, rp);
            lp = lp + 1;
            rp = rp - 1;
        } else if (isWowel(sArr[lp])) {
            rp = rp - 1;
        } else {
            lp = lp + 1;
        }
    }
    return sArr.join("");
    function isWowel(ch) {
        let isvvl = 'aeiou'.includes(ch.toLowerCase());
        return isvvl;
    }
    function swap(i, j) {
        [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
    }
};
console.log(reverseVowels("IceCreAm"));