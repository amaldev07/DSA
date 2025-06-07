// JavaScript code to implement Fibonacci series

// Function for fibonacci
function fib(n) {
    // Stop condition
    if (n == 0)
        return 0;

    // Stop condition
    if (n == 1 || n == 2)
        return 1;
    // Recursion function
    else
        return fib(n - 1) + fib(n - 2);
}

// Initialize variable n.
function fiboSeries() {
    let n = 5;
    console.log("Fibonacci series of 5 numbers is: ");
    // for loop to print the fibonacci series.
    for (let i = 0; i < n; i++) {
        console.log(fib(i) + " ");
    }
}
