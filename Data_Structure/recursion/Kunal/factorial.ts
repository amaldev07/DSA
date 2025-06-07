// f(n) = f(n-1)+f(n-2)
// factorial(4)
function factorial(n): number {
    if (n == 0 || n == 1) {
        return 1;
    }
    let sum = factorial(n - 1) + factorial(n - 2);
    return sum;
}