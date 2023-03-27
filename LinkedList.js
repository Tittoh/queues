// Define a class to represent a node in the linked list
class Node {
  constructor(data) {
    this.data = data; // The data held by the node
    this.next = null; // A reference to the next node in the list
  }
}

// Define a class to represent the linked list
class LinkedList {
  constructor() {
    this.head = null; // The first node in the list
    this.tail = null; // The last node in the list
    this.length = 0; // The number of nodes in the list
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      // If the list is empty, set the head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node to the end of the list
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      // If the list is empty, set the head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node to the beginning of the list
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // Remove the first occurrence of a node with the given data
  remove(data) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        // If the current node holds the data we want to remove
        if (previousNode === null) {
          // If the node to remove is the head of the list
          this.head = currentNode.next;
          if (this.head === null) {
            // If the list is now empty, set the tail to null as well
            this.tail = null;
          }
        } else if (currentNode.next === null) {
          // If the node to remove is the tail of the list
          this.tail = previousNode;
          previousNode.next = null;
        } else {
          // If the node to remove is in the middle of the list
          previousNode.next = currentNode.next;
        }

        this.length--;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // Get the node at the given index (0-based)
  getNodeAtIndex(index) {
    if (index < 0 || index >= this.length) {
      // If the index is out of bounds, return null
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }
}
