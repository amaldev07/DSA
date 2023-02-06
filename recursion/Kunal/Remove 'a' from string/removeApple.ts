function mainApple() {
    let str = 'bacapplecad';
    let processedStringApple = removeApple(str, 0);
    console.log("Processed String :" + processedStringApple);
}

// ps -> Processed String
function removeApple(str, i) {
    let subString = str.slice(i);
    if (subString.length == 0) {
        return '';
    }
    if (subString.startsWith('apple')) {
        return removeApple(str, i + 5);
    } else {
        let ch = str.charAt(i);
        return ch + removeApple(str, i + 1);
    }
}
