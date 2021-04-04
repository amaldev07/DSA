function createStack() {
    const stack = [];

    function push(element) {
        stack.push(element);
    }

    function pop() {
        if (stack.length === 0) {
            return "Stack is empty.";
        }
        return stack.pop();
    }

    function empty() {
        return stack.length === 0;
    }

    function peek() {
        if (stack.length === 0) {
            return "Stack is empty.";
        }
        return stack[stack.length - 1];
    }

    function swap() {
        if (stack.length < 2) {
            return "Stack has less than 2 elements, cannot perform swap.";
        }

        const top = stack.pop();
        const secondTop = stack.pop();

        stack.push(top);
        stack.push(secondTop);
    }

    return {
        push,
        pop,
        empty,
        peek,
        swap,
    };
}

// Example usage
const stack = createStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack:", stack);
console.log("Peek:", stack.peek());

stack.pop();
console.log("Stack after pop:", stack);

stack.swap();
console.log("Stack after swap:", stack);

