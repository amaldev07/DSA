/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  helper(0, s.length-1, s);
}
function helper(start, end, sArr: string[]) {
  if (start >= end) {
    return '';
  }
  let temp = sArr[end];
  sArr[end] = sArr[start];
  sArr[start] = temp;
  helper(start + 1, end - 1, sArr);
}