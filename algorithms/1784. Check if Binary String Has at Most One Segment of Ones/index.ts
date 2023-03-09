function checkOnesSegment(s: string): boolean {
    if (s.length == 1 && s[0] == '1') return true;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == '1' && s[i + 1] == '1') {
            return true;
        }
    }
    return false;
};