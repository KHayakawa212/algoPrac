class SLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(items = []) {
    this.items = items;
  }

  isEmpty() {
    return this.items.length == 0;
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  peek() {
    // return top item without removing
    return this.items[this.items.length - 1];
  }
}

class SLStack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head == null;
  }

  // Adds a new node with the given value in front of the head node.
  push(value) {
    var new_node = new SLNode(value);
    new_node.next = this.head;
    this.head = new_node;
    this.length++;
  }

  // Removes the head node
  // return the popped value -- important!
  pop() {
    if (!this.head) {
      return null;
    }
    var removed = this.head.value;
    this.head = this.head.next;
    this.length--;
    return removed;
  }

  size() {
    return this.length;
  }

  peek() {
    // Note: If this looks weird, look up ternary statements.
    // They are another way to re-write a very simple
    // if statement variable assignment.
    return this.head ? this.head.value : null;
    // return top value without removing
  }
  //
  //
  //
  //
  //
  //

  reverse() {
    var tempStack = new SLStack();
    while (this.head) {
      tempStack.push(this.pop());
    }
    this.head = tempStack.head;
    this.length = tempStack.length;
  }
}

//
//
//
//
//
//
//

class SLQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    let new_node = new SLNode(value);
    if (this.head == null) {
      this.head = new_node;
      this.tail = new_node;
      this.size++;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
      this.size++;
    }
  }
  dequeue() {
    if (this.size == 0) {
      return false;
    } else if (this.size == 1) {
      let value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    } else {
      let value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  isEmpty() {
    if (this.size == 0) {
      return true;
    } else {
      return false;
    }
  }
  sizeOf() {
    return this.size;
  }
  front() {
    if (this.size == 0) {
      return null;
    }
    return this.head.value;
  }

  // equals
  // Write a method on the Queue class that, given another queue,
  // will return whether they are equal (same items in same order).
  // Do not use any extra array or objects as storage.
  // Do not alter (pop from or push into) either queue.
  equals(secondQ) {
    let current_node = this.head;
    let second_node = secondQ.head;
    if (this.sizeOf() != secondQ.sizeOf()) {
      return false;
    }
    while (current_node != null) {
      if (current_node.value != second_node.value) {
        return false;
      }
      current_node = current_node.next;
      second_node = second_node.next;
    }
    return true;
  }
  //Math.floor(this.size/2)
  // isPalindrome
  // Write a method on the Queue class that returns whether or not the queue is a palindrome
  // Use only 1 stack as additional storage (no additional arrays / objects).
  //   BONUS (after solving) -- can you do it in one pass?
  isPalindrome() {
    let compareStack = new SLStack();
    let runner = this.head;
    while (runner) {
      compareStack.push(runner.val);
      runner = runner.next;
    }
    // Note: If you implement the size attribute in the
    //       stack class as well, you can use the equals
    //       method here, since it is identical code!
    let runner1 = this.head;
    let runner2 = compareStack.head;

    while (runner1 && runner2) {
      if (runner1.value != runner2.value) {
        return false;
      }
      runner1 = runner1.next;
      runner2 = runner2.next;
    }
    return true;
  }
}
// let my_list = new SLQueue();
// console.log(my_list.isEmpty());
// my_list.enqueue(6);
// my_list.enqueue(7);
// my_list.enqueue(8);
// my_list.enqueue(9);
// my_list.enqueue(10);
// console.log(my_list);
// my_list.dequeue();
// console.log(my_list.sizeOf());

var queue = new SLQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

var queue2 = new SLQueue();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(4);

var queue3 = new SLQueue();
queue3.enqueue(1);
queue3.enqueue(2);
queue3.enqueue(4);

var letterQ = new SLQueue();
letterQ.enqueue("a");
letterQ.enqueue("b");
letterQ.enqueue("a");

console.log(queue.equals(queue2)); // false
console.log(queue2.equals(queue3)); // true
console.log(letterQ.isPalindrome()); // true
