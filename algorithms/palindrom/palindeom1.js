function isPalindrom(number) {
    let noAr = (number + '').split('');
    let fh = '';
    let sh = '';
    for (let i = 0; i < (noAr.length / 2); i++) {
        fh = fh + noAr[i];
        sh = sh + noAr[(noAr.length - 1) - i];
    }
    let no = +fh;
    let rno = +sh;
    if (fh == sh) {
        return true;
    } else {
        return false;
    }
}