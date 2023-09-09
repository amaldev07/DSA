function removeVowels(s: string): string {
    let outS = '';
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < s.length; i++) {
        if(!vowels.includes(s[i])){
            outS = outS+s[i];
        }
    }
    return outS;
};