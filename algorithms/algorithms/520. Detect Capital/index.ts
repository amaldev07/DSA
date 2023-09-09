function detectCapitalUse(word: string): boolean {
    if (word == word.toUpperCase()) {
        return true;
    } else if (word == word.toLowerCase()) {
        return true;
    } else if ((word[0] == word[0].toUpperCase()) && (word.substring(1) == word.substring(1).toLowerCase())) {
        return true;
    }
    return false;
};