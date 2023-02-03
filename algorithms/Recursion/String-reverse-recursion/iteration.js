function reverseString(s){
    let start = 0;
    let end = s.length-1;
    while(s && start<end){
        let temp = s[end];
        s[end] = s[start];
        s[start] = temp;
        start =start+1;
        end = end-1;
    }
    return s;
}