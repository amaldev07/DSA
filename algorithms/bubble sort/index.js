function bubbleSort(ary) {
    let l = ary.length;
    // for (let i = 0; i <= l - 2; i++) {
    for (let i = 0; i < l - 1; i++) {
        for (j = 1; j <= l - 1 - i; j++) {
            if (ary[j - 1] > ary[j]) {
                let temp = ary[j - 1];
                ary[j - 1] = ary[j];
                ary[j] = temp;
            }
        }
    }
    console.log(ary);
}
bubbleSort([11, 10, 12, 13, 14, 5, 4, 3, 2, 1])

/* if the array is sorted [1,2,3,4,5]
in this case in the first loop
that is i=0; from j=1 to j<=length-1-i 
there wont be any swap, that is the swap if condition wont execute
we can find out this scenario using a flag
in this case we dont need to run j=1 to j<=length-2 */
/* so the code is */
function bubbleSort(ary) {
    let l = ary.length;
    for (let i = 0; i < l - 1; i++) {
        let flag = false;
        console.log(i);
        for (j = 1; j <= l - 1 - i; j++) {
            if (ary[j - 1] > ary[j]) {
                flag = true;
                let temp = ary[j - 1];
                ary[j - 1] = ary[j];
                ary[j] = temp;
            }
        }
        if (!flag) {
            break;
        }
    }
    console.log(ary);
}
bubbleSort([1, 2, 3, 4, 5])