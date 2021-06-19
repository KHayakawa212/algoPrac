class SLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  insertAtBack(data) {
    let new_node = new SLNode(data);
    if (this.head == null) {
      this.head = new_node;
      return this;
    }
    let current_node = this.head;
    while (current_node.next != null) {
      current_node = current_node.next;
    }
    current_node.next = new_node;
    return this;
  }

  seedFromArr(vals) {
    for (const item of vals) {
      this.insertAtBack(item);
    }
    return this;
  }

  printValues() {
    var runner = this.head;
    while (runner != null) {
      console.log(runner.value);
      runner = runner.next;
    }
  }

  insertAtFront(data) {
    var newNode = new SLNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeAtFront() {
    if (this.head == null) {
      console.log("LIST IS EMPTY");
    } else {
      var value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  average() {
    let runner = this.head;
    let sum = 0;
    let count = 0;
    while (runner) {
      count++;
      sum += runner.value;
      runner = runner.next;
    }
    return sum / count;
  }

  contains(val) {
    let runner = this.head;
    while (runner) {
      if (runner.value === val) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  removeBack() {
    var removedVal;
    if (!this.head) {
      console.log("List empty.");
      return null;
    }
    if (!this.head.next) {
      removedVal = this.head.value;
      this.head = null;
      return removedVal;
    }
    var runner = this.head;
    while (runner.next.next) {
      runner = runner.next;
    }
    removedVal = runner.next.value;
    runner.next = null;
    return removedVal;
  }

  secondToLast() {
    if (!this.head || !this.head.next) {
      return null;
    }
    var runner = this.head;
    while (runner.next.next) {
      runner = runner.next;
    }
    return runner.value;
  }

  removeVal(val) {
    if (!this.head) {
      return false;
    }
    if (this.head.value == val) {
      this.removeAtFront();
      return true;
    }
    var runner = this.head;
    while (runner.next) {
      if (runner.next.value == val) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  kthToLast(k) {
    var buffer = this.head;
    var trail = this.head;
    while (k > 0 && buffer) {
      buffer = buffer.next;
      k--;
    }
    if (!buffer || k < 0) {
      console.log("value out of range");
      return null;
    }
    while (buffer.next) {
      trail = trail.next;
      buffer = buffer.next;
    }
    return trail.value;
  }
}

/* insertAtBack & seedFromArray Test */
let my_list = new SLL();
my_list.insertAtBack(6);
my_list.insertAtBack(7);
my_list.insertAtBack(8);
my_list.insertAtBack(9);
my_list.insertAtBack(10);

// console.log("second to last is: " + my_list.secondToLast());
// console.log(my_list.removeVal(6));
// console.log(my_list.removeVal(8));
my_list.printValues();
console.log(my_list.kthToLast(6));
