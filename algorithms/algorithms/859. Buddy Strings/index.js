function buddyStrings(s, goal) {
    if (s.length != goal.length) return false;
    if (s == goal) {
        return hassameCharCountMorethanTwo(s);
    } else {
        let x, y, a, b = -1;
        let c = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] != goal[i]) {
                c = c + 1;
                if (c == 1) {
                    x = s[i];
                    y = goal[i];
                }
                if (c == 2) {
                    a = s[i];
                    b = goal[i];
                }
            }
        }
        console.log("--" + [a, b, x, y]);
        if (c == 2 && (x == b && y == a)) {
            return true;
        } else {
            return false;
        }

    }
};
function hassameCharCountMorethanTwo(s) {
    let counter = {};
    for (let i = 0; i < s.length; i++) {
        counter[s[i]] = counter[s[i]] ? counter[s[i]] + 1 : 1;
        if (counter[s[i]] >= 2) {
            return true;
        }
    }
    return false;
}