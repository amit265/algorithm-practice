// Level Order Traversal (Breadth-First Traversal)

// what is level order traversal?

// Level order traversal is a method of visiting all the nodes in a binary tree level by level, from left to right. It is also known as breadth-first traversal.

// what is breadth-first traversal?
    
// Breadth-first traversal is a tree traversal technique where nodes are explored level by level, starting from the root and moving down to the leaves. Each level is processed from left to right before moving on to the next level.

// Mental model:

// “Imagine standing at the root of a tree and looking at each level one by one, moving from left to right, just like reading a book.”

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null; // left child
    this.right = null; // right child
  }
}

function levelOrderTraversal(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    let level = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      level.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(level);
  }

  return result;
}
