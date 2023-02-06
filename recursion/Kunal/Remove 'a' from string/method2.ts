function main2() {
    let str = 'baccad';
    let processedString = removeA2(str, 0);
    console.log("Processed String :" + processedString);
}

// ps -> Processed String
function removeA2(str, i) {
    let subString = str.slice(i);
    if (subString.length == 0) {
        return '';
    }
    let ch = str.charAt(i);
    if (ch == 'a') {
        return '' + removeA2(str, i + 1);
    } else {
        return ch + removeA2(str, i + 1);
    }
}
