function longestPalindrome(s) {
    let maxLen = 1;
    let maxStr = s[0];
    for (let i = 0; i < s.length; i++) {
        let a = i;
        let b = i;
        while (a >= 0 && b <= (s.length - 1) && s[a] == s[b]) {
            let len = b - a + 1;
            if (len > maxLen) {
                maxLen = len;
                maxStr = s.substring(a, b + 1);
            }
            a = a - 1;
            b = b + 1;
        }

        a = i;
        b = i + 1;
        while (a >= 0 && b <= (s.length - 1) && s[a] == s[b]) {
            let len = b - a + 1;
            if (len > maxLen) {
                maxLen = len;
                maxStr = s.substring(a, b + 1);
            }
            a = a - 1;
            b = b + 1;
        }
    }
    return maxStr;
};