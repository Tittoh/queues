// Define a class for a node in the linked list
class Node {
  constructor(value) {
    this.value = value; // Value of the node
    this.next = null; // Reference to the next node in the list
  }
}

// Define a class for the queue using a linked list
class Queue {
  constructor() {
    this.head = null; // Reference to the first node in the list
    this.tail = null; // Reference to the last node in the list
    this.size = 0; // Size of the queue
  }

  // Add an element to the back of the queue
  enqueue(value) {
    const node = new Node(value); // Create a new node with the given value

    // If the queue is empty, set both head and tail to the new node
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // Otherwise, add the new node to the back of the queue and update the tail
      this.tail.next = node;
      this.tail = node;
    }

    this.size++; // Increment the size of the queue
  }

  // Remove and return the element at the front of the queue
  dequeue() {
    // If the queue is empty, throw an error
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    // Get the value of the element at the front of the queue
    const value = this.head.value;

    // If the queue has only one element, set both head and tail to null
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Otherwise, remove the element at the front of the queue and update the head
      this.head = this.head.next;
    }

    this.size--; // Decrement the size of the queue

    return value; // Return the value of the removed element
  }

  // Return the element at the front of the queue without removing it
  peek() {
    // If the queue is empty, throw an error
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.head.value; // Return the value of the element at the front of the queue
  }

  // Return the size of the queue
  getSize() {
    return this.size;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }
}
