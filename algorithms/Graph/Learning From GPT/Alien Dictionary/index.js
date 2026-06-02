function alienOrder(words) {
    let graph = {};
    let inDegree = {};
    for (let word of words) {
        for (let char of word) {
            if (!graph[char]) {
                graph[char] = new Set();
                inDegree[char] = 0;
            }
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];
        if (word1.length > word2.length && word1.startsWith(word2)) { return '' };
        let minLength = Math.min(word1.length, word2.length);
        for (let i = 0; i < minLength; i++) {
            if (word1[i] !== word2[i]) {
                graph[word1[i]].add(word2[i]);
                inDegree[word2[i]]++;
            }
            break;
        }
    }

    let queue = [];
    for (char in inDegree) {
        if (inDegree[char] === 0) {
            queue.push(char);
        }
    }

    let alienLetterOrder = [];
    while (queue.length > 0) {
        let node = queue.shift();
        alienLetterOrder.push(node);
        for (let neighbour of graph[node]) {
            inDegree[neighbour]--;
        }
    }
    return alienLetterOrder.length === Object.keys(inDegree) ? alienLetterOrder.join('') : '';
}