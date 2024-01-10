function titleToNumber(columnTitle: string): number {
    let colNumber = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let char = columnTitle[columnTitle.length - 1 - i].toLowerCase().charCodeAt(0) - 96;
        let charVal = (Math.pow(26, i)) * char;
        colNumber = colNumber + charVal;
    }
    return colNumber;
};