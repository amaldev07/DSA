function splitString1(s) {
    let flag = false;
    for (let i = 0; i < s.length - 1; i++) {
        let pNew = s.substring(0, i + 1)
        let upNew = s.substring(i + 1, s.length)
        if (+pNew != 0) {
            flag = flag || recSplitStr1(pNew, upNew) ? true : false;
        }
    }
    return flag;
    // return recSplitStr('', s) ? true : false;
};

function recSplitStr1(p, up) {
    debugger;
    if (up == '') {
        return true;
    }
    if (+p == 0 && +up == 0) {
        return true;
    }
    for (let i = 0; i < up.length; i++) {
        let pNew = up.substring(0, i + 1)
        let upNew = up.substring(i + 1, up.length)
        if (+p == 1 && +pNew == 0) {
            return recSplitStr1(pNew, upNew) ? true : false;
        }
        else if (+pNew != 0 && (+p - +pNew == 1)) {
            return recSplitStr1(pNew, upNew) ? true : false;
        }
    }
};