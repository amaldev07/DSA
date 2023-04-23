function strStr(haystack: string, needle: string): number {
let s = 0;
let e = needle.length-1;
while(e<=haystack.length-1){
    let subStr = haystack.substring(s,e+1);
    if(subStr != needle){
        s= s+1;
        e=e+1;
    } else{
        return s;
    }
}
return -1;
};