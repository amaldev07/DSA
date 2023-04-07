function findArray(pref: number[]): number[] {
    let xor = pref[0];
    for (let i = 1; i < pref.length; i++) {
        pref[i] = xor ^ pref[i];
        xor = xor ^ pref[i];
    }
    return pref;
};