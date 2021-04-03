class Stack {
  constructor() {
    this.stack = [];
  }

  // Function to push an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Function to pop an element from the stack
  pop() {
    if (this.stack.length === 0) {
      return "Stack is empty.";
    }
    return this.stack.pop();
  }

  // Function to check if the stack is empty
  empty() {
    return this.stack.length === 0;
  }

  // Function to peek the top element of the stack
  peek() {
    if (this.stack.length === 0) {
      return "Stack is empty.";
    }
    return this.stack[this.stack.length - 1];
  }

  // Function to swap the top two elements of the stack
  swap() {
    if (this.stack.length < 2) {
      return "Stack has less than 2 elements, cannot perform swap.";
    }

    const top = this.stack.pop();
    const secondTop = this.stack.pop();

    this.stack.push(top);
    this.stack.push(secondTop);
  }
}

// Example usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack:", stack.stack);
console.log("Peek:", stack.peek());

stack.pop();
console.log("Stack after pop:", stack.stack);

stack.swap();
console.log("Stack after swap:", stack.stack);
