class MyStack {
    private items;
    constructor() {
        this.items = [];
    }

    push(x: number): void {
        this.items.push(x);
    }

    pop(): number {
        return this.items.pop();
    }

    top(): number {
        return this.items[this.items.length - 1];
    }

    empty(): boolean {
        return this.items.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */