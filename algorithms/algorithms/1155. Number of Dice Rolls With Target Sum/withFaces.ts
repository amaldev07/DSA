
function recFaces(p, up, faces): any {
    //p here is string
    if (up == 0) {
        return [p];
    }
    let ret = [];
    for (let i = 0; i < (up + 1) && i < faces; i++) {
        let newP = p + (i + 1)
        ret = ret.concat(recFaces(newP, up - (i + 1), faces));
    }
    return ret;
}
