function main() {
    helper(4, 0);
    // helper1(4, 0);
}
function helper(r, c) {
    if (r == 0) {
        return;
    }
    if (c < r) {
        console.log("*");
        c = c + 1;
        helper(r, c);
    } else {
        console.log("\n");
        r = r - 1;
        c = 0;
        helper(r, c);
    }
}
function helper1(r, c) {
    if (r == 0) {
        return;
    }
    if (c < r) {
        helper1(r, c+1);
        console.log("*");
    } else {
        helper1(r-1, 0);
        console.log("\n");

    }
}