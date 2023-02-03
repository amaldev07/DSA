function reverseString(s) {
    helper(0, s.length - 1, s);
    return s;
}
function helper(i, j, s) {
    // i :is the starting index
    // j :is the ending index
    if (i > j) {
        return;
    }
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i = i + 1;
    j = j - 1;
    helper(i, j, s);
}