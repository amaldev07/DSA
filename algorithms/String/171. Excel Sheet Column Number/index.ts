/* 
Approach
ABC= 26^21 + 26^12 + 26^03
=> 26^2a + 26^1b + 26^0c

where a,b,c means 1,2,3
so it becomes
for i=2 to 0
ABC= 26^ia + 26^ib + 26^i*c
*/
function titleToNumber(columnTitle: string): number {
    let colNumber = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let char = columnTitle[columnTitle.length - 1 - i].toLowerCase().charCodeAt(0) - 96;
        let charVal = (Math.pow(26, i)) * char;
        colNumber = colNumber + charVal;
    }
    return colNumber;
};