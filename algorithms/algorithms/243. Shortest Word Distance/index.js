function shortestDistance(wordsDict, word1, word2) {
    debugger;
    let index1 = -1;
    let index2 = -1;
    let distance = Number.MAX_VALUE;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1) {
            index1 = i;
            if (index2 != -1) {
                distance = Math.min(distance, (Math.abs(index1 - index2)));
            }
        }
        if (wordsDict[i] == word2) {
            index2 = i;
            if (index1 != -1) {
                distance = Math.min(distance, (Math.abs(index1 - index2)));
            }
        }
    }
    return distance;
};
