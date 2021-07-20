class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let new_node = new BSTNode(val);
    let runner = this.root;
    if (this.root == null) {
      this.root = new_node;
      return this;
    }
    while (runner != null) {
      if (runner.value > val) {
        if (runner.left == null) {
          runner.left = new_node;
          return this;
        }
        runner = runner.left;
      } else if (runner.value <= val) {
        if (runner.right == null) {
          runner.right = new_node;
          return this;
        }
        runner = runner.right;
      }
    }
  }

  recursiveInsert(val, runner = this.root) {
    if (this.root == null) {
      let new_node = new BSTNode(val);
      this.root = new_node;
      return this;
    }
    if (runner.value > val) {
      if (runner.left == null) {
        let new_node = new BSTNode(val);
        runner.left = new_node;
        return this;
      }
      return this.recursiveInsert(val, runner.left);
    } else if (runner.value <= val) {
      if (runner.right == null) {
        let new_node = new BSTNode(val);
        runner.right = new_node;
        return this;
      }
      return this.recursiveInsert(val, runner.right);
    }
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if (!this.root) {
      return true;
    }
    return false;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {BSTNode} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if (current == null) {
      return null;
    }
    while (current.left != null) {
      current = current.left;
    }
    return current.value;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {BSTNode} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if (current == null) {
      return null;
    }
    if (current.left == null) {
      return current.value;
    }
    return this.minRecursive(current.left);
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if (current == null) {
      return null;
    }
    while (current.right != null) {
      current = current.right;
    }
    return current.value;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if (current == null) {
      return null;
    }
    if (current.right == null) {
      return current.value;
    }
    return this.maxRecursive(current.right);
  }

  printFunc(node = this.root) {
    if (!node) {
      return;
    }
    this.printFunc(node.left);
    console.log(node.value);
    this.printFunc(node.right);
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal) {
    if (this.root == null) {
      return false;
    }
    let runner = this.root;
    while (runner != null) {
      if (runner.value > searchVal) {
        runner = runner.left;
      } else if (runner.value < searchVal) {
        runner = runner.right;
      } else {
        return true;
      }
    }
    return false;
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (!current) {
      return false;
    } else if (current.value == searchVal) {
      return true;
    }
    return (
      this.containsRecursive(searchVal, current.left) ||
      this.containsRecursive(searchVal, current.right)
    );
  }

  /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree or a sub tree depending on      * if the start Node is the root or not.
   */
  range(startNode = this.root) {
    let min = this.min(startNode);
    let max = this.max(startNode);
    return max - min;
  }

  /**
   * DFS Inorder: (Left, Parent, Right)
   * Converts this BST into an array following Depth First Search inorder.
   * See debugger call stack to help understand the recursion.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(node = this.root, vals = []) {
    if (!node) {
      return vals;
    }
    vals = this.toArrInorder(node.left, vals);
    vals.push(node.value);
    vals = this.toArrInorder(node.right, vals);
    return vals;
  }

  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  size(node = this.root, counter = 0) {
    if (!node) {
      return counter;
    }
    counter = this.size(node.left, counter);
    counter++;
    counter = this.size(node.right, counter);
    return counter;
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
  // height(node = this.root) {}
}

let tree = new BST();
let testVals = [10, 5, 7, 20, 15, 15, 12, 13, 23, 2, 1];
/*
              10
             /   \
           5      20
          / \    /  \
         2   7  15   23
        /      /  \
       1      12   15
                \
                13
    */
for (let val of testVals) {
  tree.insert(val);
}
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.minRecursive());
// console.log(tree.maxRecursive());
// console.log(tree);
// tree.printFunc();
// console.log(tree.contains(7));
// console.log(tree.contains(23));
// console.log(tree.contains(80));
// console.log(tree.containsRecursive(23));
// console.log(tree.containsRecursive(80));
// console.log(tree.range());
// console.log(tree.toArrInorder());
console.log(tree.size());
