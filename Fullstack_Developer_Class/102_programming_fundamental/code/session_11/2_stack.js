class Stack {
    container = [];

    push(element) {
        this.container.push(element);
    }

    pop() {
        return this.container.pop();
    }
}
