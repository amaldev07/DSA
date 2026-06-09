/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    let queue = []; //save as [word, level]
    queue.push([beginWord, 1]);
    while (queue.length > 0) {
        let [word, level] = queue.shift();
        if (word == endWord) return level;

        for (let i = 0; i < word.length; i++) {
            for (let j = 97; j <= 122; j++) {
                let letter = String.fromCharCode(j);
                let newWord =
                    word.slice(0, i) +
                    letter +
                    word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
};