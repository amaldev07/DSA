/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s.length == 1) return s;
    let lp = 0;
    let rp = s.length - 1;
    let mid = Math.floor(s.length);
    debugger;
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
    function isWowel(i) {
        return 'aeiou'.includes(s[i]);
    }
    function swap(i,j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};
reverseVowels("icecream")