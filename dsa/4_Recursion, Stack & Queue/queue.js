// implement queue using array

// what is queue ?

// Queue is a linear data structure that follows the First In First Out (FIFO) principle.
// In a queue, the element that is added first will be removed first.
// We can visualize a queue as a line of people waiting to get into a movie theater.
// The person who arrives first will be the first one to enter the theater.

// what is array?
// An array is a data structure that can hold a fixed number of values of a single type.

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
  }

  // enqueue method to add an element to the end of the queue

  enqueue(element) {
    this.items.push(element);
  }

  // dequeue method to remove an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const item = this.items[this.front];
    this.front++;
    return item;
  }

  // isEmpty method to check if the queue is empty

  isEmpty() {
    return this.items.length - this.front === 0;
  }

  // peek method to get the front element of the queue

  peek() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[this.front];
  }

  // size method to get the size of the queue

  size() {
    return this.items.length - this.front;
  }

  // print method to print the elements of the queue

  print() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    let result = "";
    for (let i = this.front; i < this.items.length; i++) {
      result += this.items[i] + " ";
    }
    return result.trim();
  }
}

// time complexity:
// enqueue: O(1)
// dequeue: O(1)
// peek: O(1)
// isEmpty: O(1)
// size: O(1)
// print: O(n)

// space complexity: O(n) for the array

// test the Queue class

const queue = new Queue();
console.log(queue.isEmpty()); // Output: true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.print()); // Output: 10 20 30
console.log(queue.size()); // Output: 3
console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.print()); // Output: 20 30
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
