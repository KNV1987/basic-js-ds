const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 function LinkedListNode(x, nextEl = null) {
  this.value = x;
  this.next = nextEl;
}
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.prev = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newNode = new LinkedListNode(value, null);
    if (!this.head) {
      this.head = newNode;
    } else this.prev.next = newNode;
    
    this.prev = newNode;
    return this.head;
  }

  dequeue() {
    let deleteValue = this.head;
    if (deleteValue.next) {
      this.head = deleteValue.next;
    } else {
      this.head = null;
      this.prev = null;
    }
    return deleteValue.value;
  }
}
