class Queue {
    container = [];

    constructor() {}

    // adds an element to the end of the Queue.
    enqueue(element) {
        this.container.push(element);
    }

    // removes the oldest element from the start of the Queue.
    dequeue() {
        return this.container.splice(0, 1);
    }
}
