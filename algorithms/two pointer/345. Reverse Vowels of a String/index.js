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
    while (lp < rp) {
        // Move lp to the next vowel
        while (lp < rp && !isVowel(sArr[lp])) {
            lp++;
        }
        // Move rp to the previous vowel
        while (lp < rp && !isVowel(sArr[rp])) {
            rp--;
        }
        if (lp < rp) {
            [sArr[lp], sArr[rp]] = [sArr[rp], sArr[lp]];
            lp++;
            rp--;
        }
    }
    return sArr.join("");
    function isVowel(ch) {
        let isvvl = 'aeiou'.includes(ch.toLowerCase());
        return isvvl;
    }

};
console.log(reverseVowels("IceCreAm"));