function canConstruct(ransomNote: string, magazine: string): boolean {
    let hmMagazineChars = new Map();
    for (let i = 0; i < magazine.length; i++) {
        let ch = magazine[i];
        hmMagazineChars.set(ch, (hmMagazineChars.get(ch) || 0) + 1)
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let ch = ransomNote[i];
        if (!hmMagazineChars.get(ch) || hmMagazineChars.get(ch) == 0) {
            return false;
        }
        hmMagazineChars.set(ch, hmMagazineChars.get(ch) - 1)
    }
    return true;
};