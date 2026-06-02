function alienOrder(words) {
    const graph = {};
    const indegree = {};

    // Step 1: initialize all unique characters
    for (const word of words) {
        for (const char of word) {
            if (!graph[char]) {
                graph[char] = new Set();
                indegree[char] = 0;
            }
        }
    }

    // Step 2: build graph from adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];

        // invalid case: "abc" before "ab"
        if (
            word1.length > word2.length &&
            word1.startsWith(word2)
        ) {
            return "";
        }

        const minLen = Math.min(word1.length, word2.length);

        for (let j = 0; j < minLen; j++) {
            const c1 = word1[j];
            const c2 = word2[j];

            if (c1 !== c2) {
                // avoid duplicate edge
                if (!graph[c1].has(c2)) {
                    graph[c1].add(c2);
                    indegree[c2]++;
                }

                break;
            }
        }
    }

    // Step 3: Kahn's Algorithm
    const queue = [];

    for (const char in indegree) {
        if (indegree[char] === 0) {
            queue.push(char);
        }
    }

    let result = "";

    while (queue.length > 0) {
        const char = queue.shift();
        result += char;

        for (const neighbour of graph[char]) {
            indegree[neighbour]--;

            if (indegree[neighbour] === 0) {
                queue.push(neighbour);
            }
        }
    }

    // if cycle exists
    return result.length === Object.keys(indegree).length ? result : "";
}