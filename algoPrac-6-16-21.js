class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Part I

let a = new Node(7);
let b = new Node(3);
let c = new Node(1);
a.next = b;
b.next = c;

console.log("A:", a.val);
console.log("B:", b.val);
console.log("C:", c.val);
console.log(a.next.val);
console.log(a.next.next.val);
console.log(a.next.next.next.val);

// Part II
// Note: Later the head variable shown here will be part of the SLL class

let head = new Node(1);
let runner_temp = head;
for (let i of [7, 3, 5, 2]) {
  let new_node = new Node(i);
  runner_temp.next = new_node;
  runner_temp = new_node;
}

console.log(head.val);
console.log(head.next.val);
console.log(head.next.next.next.val);
