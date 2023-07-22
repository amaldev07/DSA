function isIsomorphic(s, t) {
    let hm = new Map();
    let tset = [];
    for (let i = 0; i < s.length; i++) {
        if (hm.get(s[i])) {
            if (hm.get(s[i]) != t[i]) return false;
        } else {
            if (tset.includes(t[i])) {
                return false;
            }
            tset.push(t[i]);
            hm.set(s[i], t[i]);
        }
    }
    return true;
};

/* better approach */
function isIsomorphic(s, t) {
    if (s.length != t.length) {
        return false;
    }
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mapS.get(s[i]) != mapT.get(t[i])) {
            return false;
        }
        mapS.set(s[i], i);
        mapT.set(t[i], i);
    }

    return true;
};
isIsomorphic('dadc', 'babe');