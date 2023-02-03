function main() {
    let str = 'baccad';
    removeA(str, 0, '');
}

// ps -> Processed String
function removeA(str, i, ps) {
    let subString = str.slice(i);
    if (subString.length == 0) {
        console.log("Processed String :" + ps);
        return;
    }
    let ch = str.charAt(i);
    if (ch == 'a') {
        removeA(str, i + 1, ps);
    } else {
        removeA(str, i + 1, ps + ch);
    }
}
