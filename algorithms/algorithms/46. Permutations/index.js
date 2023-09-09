
function permute(nums: number[]): number[][] {
    return permutaions([], nums);
};
function permutaions(pArr, upArr) {
    if (upArr.length == 0) {
        return [pArr]
    }

    let chArr = [upArr[0]];
    let retArr = [];
    for (let i = 0; i <= pArr.length; i++) {
        let npArr = [].concat(
            pArr.slice(0, i),
            chArr,
            pArr.slice(i, pArr.length + 1)
        );
        let newUpArr = upArr.slice(1, upArr.length);
        let ret = permutaions(npArr, newUpArr);
        retArr = retArr.concat(ret);
    }
    return retArr
}

// function permutaions(pArr, upArr) {
//     debugger;
//     if (upArr.length == 0) {
//         console.log(pArr);
//         return;
//     }

//     let chArr = [upArr[0]];
//     for (let i = 0; i <= pArr.length; i++) {
//         npArr = [].concat(
//             pArr.slice(0, i),
//             chArr,
//             pArr.slice(i, pArr.length + 1)
//         );
//         let  a = upArr.slice(1, upArr.length);
//         permutaions(npArr, a);
//     }
// }
