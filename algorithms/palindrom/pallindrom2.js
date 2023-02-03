function isPalindrom(no) {
    let rno = 0;
    while (no > rno) {
        rno = (rno * 10) + no % 10;
        no = Math.floor(no / 10);
    }
    if ((no == rno) || (no == Math.floor(rno / 10))) {
        return true;
    } else {
        return false;
    }
}