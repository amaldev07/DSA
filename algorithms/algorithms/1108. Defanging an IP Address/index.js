function defangIPaddr(address) {
    /* 
    // One liner solution using inbuilt string replaceAll()
    return address.replaceAll('.', '[.]'); */
    let dAddr = '';
    for (let i = 0; i < address.length; i++) {
        if (address[i] == '.') {
            dAddr = dAddr + '[.]';
        } else {
            dAddr = dAddr + address[i];
        }
    }
    return dAddr;
};
// test