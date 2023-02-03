/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
//  goodDaysToRobBank([5,3,3,3,5,6,2], 2);
var goodDaysToRobBank = function (security, time) {
    // let nonDecreasingArray = [];
    let nonDecreasingArray = new Array(security.length).fill(0);
    // let nonInccreasingArray = [];
    let nonInccreasingArray = new Array(security.length).fill(0);

    //find nonDecreasingArray
    for (let i = 1; i < security.length; i++) {
        if (security[i] <= security[i - 1]) {
            nonDecreasingArray[i] = nonDecreasingArray[i - 1] + 1;
        } else {
            nonDecreasingArray[i] = 0;
        }
    }
    console.log('nonDecreasingArray : ' + nonDecreasingArray.join(','));

    //find nonInccreasingArray
    for (let i = security.length - 2; i >= 0; i--) {
        if (security[i] <= security[i + 1]) {
            nonInccreasingArray[i] = nonInccreasingArray[i + 1] + 1;
        } else {
            nonInccreasingArray[i] = 0;
        }
    }
    console.log('nonInccreasingArray : ' + nonInccreasingArray.join(','));

    //find ith elements those are greater than time
    let result = [];
    for (let i = 0; i < security.length - time; i++) {
        if ((nonDecreasingArray[i] >= time) && (nonInccreasingArray[i] >= time)) {
            result.push(i)
        }
    }
    return result;
};