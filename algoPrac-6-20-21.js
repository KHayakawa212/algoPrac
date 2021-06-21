// QUEUES AND STACKS
class SLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// MON
// LAST IN FIRST OUT
// LIFO - STACKS
class Stack {
  constructor(items = []) {
    this.items = items;
  }

  isEmpty() {
    if (this.items.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    this.items.pop();
  }
  size() {
    return this.items.length;
  }
  peek() {
    // return top item without removing
    return this.items[0];
  }
}

class SLStack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head == null) {
      return true;
    } else {
      return false;
    }
  }

  // Adds a new node with the given value in front of the head node.
  push(value) {
    let new_node = new SLNode(value);
    new_node.next = this.head;
    this.head = new_node;
  }

  // Removes the head node
  // return the popped value -- important!
  pop() {
    let value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  size() {
    let new_node = this.head;
    let counter = 0;
    while (new_node !== null) {
      counter++;
      new_node = new_node.next;
    }
    return counter;
  }
  peek() {
    // return top item without removing
    return this.head.value;
  }

  ////  EXTRA  ///// [ EDITED! ]
  // Reverses stack with the order of the nodes reversed
  // For this exercise, do NOT try to re-point all the pointers
  // use an extra stack as storage and utilize the pop and push
  // methods. Hint: you can re-point the head.
  reverse() {}
}
