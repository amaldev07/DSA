function isPalindrome(s) {
    s = s.toLowerCase();
    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
        while (l <= r && !isAChar(s[l])) {
            l = l + 1
        };
        while (l <= r && !isAChar(s[r])) {
            r = r - 1
        };
        if (l > r) break;
        if (s[l].toLowerCase() != s[r].toLowerCase()) {
            return false;
        } else {
            l = l + 1;
            r = r - 1;
        }
    }
    return true;
};
function isAChar(s) {
    let charCode = s.charCodeAt(0);
    if ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) return true;
    return false;
}
// isPalindrome("0P");