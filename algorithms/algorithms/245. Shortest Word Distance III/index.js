function shortestWordDistance(wordsDict, word1, word2) {
    debugger;
    let index1 = -1;
    let index2 = -1;
    let distance = Number.MAX_VALUE;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1 && wordsDict[i] == word2) {
            if (index1 != -1) {
                distance = Math.min(distance, Math.abs(i - index1));
            }
            index1 = i;
        } else if (wordsDict[i] == word1) {
            if (index2 != -1) {
                distance = Math.min(distance, Math.abs(i - index2));
            }
            index1 = i;
        }
        else if (wordsDict[i] == word2) {
            if (index1 != -1) {
                distance = Math.min(distance, Math.abs(i - index1));
            }
            index2 = i;
        }
    }
    return distance;
};
shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "makes")