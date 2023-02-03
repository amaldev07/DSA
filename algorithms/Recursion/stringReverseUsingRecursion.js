let reversedString = "";
function reverseString(str) {
    helper(0, str);
    return reversedString;
}

function helper(index, str) {
    //base condition , i,e termination condition
    if (str == null || index >= str.length) {
        return;
    }
    helper(index + 1, str);
    console.log(str[index]);
    reversedString = reversedString + str[index];
}