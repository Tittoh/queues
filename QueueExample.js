// Define a Queue class
class Queue {
  constructor() {
    // Initialize the queue with an empty array of items
    this.items = [];
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the element at the front of the queue
  dequeue() {
    // If the queue is empty, return "Underflow"
    if (this.isEmpty()) {
      return "Underflow";
    }
    // Otherwise, remove and return the first item in the queue
    return this.items.shift();
  }

  // Return the element at the front of the queue without removing it
  front() {
    // If the queue is empty, return "No elements in Queue"
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    // Otherwise, return the first item in the queue
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // Return a string representation of the queue
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Example usage
let queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); // 10 20 30

console.log(queue.front()); // 10

console.log(queue.dequeue()); // 10

console.log(queue.printQueue()); // 20 30
