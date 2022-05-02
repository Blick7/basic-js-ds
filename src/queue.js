const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
class Queue {
  construct() {
    this.first = null;
    this.last = null;
  }
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let listNode = new ListNode(value);
    if (this.first == null) {
      this.first = listNode;
      this.last = this.first;
    }
    this.last.next = listNode;
    this.last = this.last.next;
  }

  dequeue() {
    let topEl = this.first.value;
    this.first = this.first.next;
    return topEl;
  }
}

module.exports = {
  Queue,
};
