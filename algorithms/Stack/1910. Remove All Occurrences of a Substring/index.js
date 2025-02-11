/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
function removeOccurrences(s, part) {
    let stack = [];
    let partLength = part.length;

    for (let char of s) {
        stack.push(char);  // Add each character to the stack

        // Check if the end of the stack matches the `part` substring
        if (stack.length >= partLength && stack.slice(-partLength).join('') === part) {
            // Remove the substring from the stack by popping the last `partLength` characters
            stack.splice(-partLength);
        }
    }
    // Join the stack to form the final string
    return stack.join('');
}
