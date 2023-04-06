function findArray(pref: number[]): number[] {
    for (let i = 1; i < pref.length; i++) {
        pref[i] = pref[i - 1] ^ pref[i];
    }
    return pref;
};