function recConsole(p, up): any {
    let dies = [1, 2, 3, 4, 5, 6];
    if (up == 0) {
        console.log(p)
        return;
    }
    for (let i = 0; i < (up + 1) && i < 6; i++) {
        let newP = p + (i + 1);
        recConsole(newP, up - (i + 1));
    }
}


function recRet(p, up): any {
    //p here is string
    if (up == 0) {
        return [p];
    }
    let ret = [];
    for (let i = 0; i < (up + 1) && i < 6; i++) {
        let newP = p + (i + 1)
        ret = ret.concat(recRet(newP, up - (i + 1)));
    }
    return ret;
}


function recRetArr(p, up): any {
    if (up == 0) {
        return [p];
    }
    let ret = [];
    for (let i = 0; i < (up + 1) && i < 6; i++) {
        let newP = [...p];
        newP.push(i + 1);
        ret = ret.concat(recRetArr(newP, up - (i + 1)));
    }
    return ret;
}