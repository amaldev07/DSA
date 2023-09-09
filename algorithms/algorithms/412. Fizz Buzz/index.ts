function fizzBuzz(n: number): string[] {
    let opAry: string[] = [];
    for (let i = 1; i < n + 1; i++) {
        if ((i % 5 == 0) && (i % 3 == 0)) {
            opAry.push('FizzBuzz');
        } else if ((i % 3) == 0) {
            opAry.push('Fizz');
        } else if ((i % 5) == 0) {
            opAry.push('Buzz');
        } else {
            opAry.push('' + i);
        }
    }
    return opAry;
};