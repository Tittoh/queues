class Queue {
  constructor() {
    // initialize an empty array to store the elements of the queue
    // and an object to keep track of the front and rear indices
    this.elements = [];
    this.indices = {
      front: 0,
      rear: -1,
    };
  }

  // adds an element to the end of the queue
  enqueue(element) {
    // increment the rear index and assign the element to the
    // corresponding index in the elements array
    this.elements[++this.indices.rear] = element;
  }

  // removes and returns the element at the front of the queue
  dequeue() {
    // check if the queue is empty by comparing the front and rear indices
    if (this.indices.front > this.indices.rear) {
      return undefined;
    }
    // retrieve the element at the front of the queue
    const element = this.elements[this.indices.front++];
    // check if the queue is now empty
    if (this.indices.front > this.indices.rear) {
      // reset the front and rear indices
      this.indices.front = 0;
      this.indices.rear = -1;
    }
    // return the dequeued element
    return element;
  }

  // returns the element at the front of the queue without removing it
  peek() {
    // check if the queue is empty
    if (this.indices.front > this.indices.rear) {
      return undefined;
    }
    // return the element at the front of the queue
    return this.elements[this.indices.front];
  }

  // returns the number of elements in the queue
  size() {
    return this.indices.rear - this.indices.front + 1;
  }

  // returns true if the queue is empty, false otherwise
  isEmpty() {
    return this.size() === 0;
  }
}
