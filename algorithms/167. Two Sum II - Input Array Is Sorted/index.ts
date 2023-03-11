function twoSum(numbers: number[], target: number): number[] {
    /* s for start
    e for end */
    let s = 0;
    let e = numbers.length - 1;
    while (s < e) {
        let sum = numbers[s] + numbers[e];
        if (sum == target) {
            return [s + 1, e + 1];
        } else if (sum < target) {
            s = s + 1;
        } else {
            e = e - 1;
        }
    }
    return [-1, -1]
};