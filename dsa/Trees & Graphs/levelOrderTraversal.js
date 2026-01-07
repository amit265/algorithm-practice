// Level Order Traversal (Breadth-First Traversal)

// what is level order traversal?

// Level order traversal is a method of visiting all the nodes in a binary tree level by level, from left to right. It is also known as breadth-first traversal.

// what is breadth-first traversal?
    
// Breadth-first traversal is a tree traversal technique where nodes are explored level by level, starting from the root and moving down to the leaves. Each level is processed from left to right before moving on to the next level.

// Mental model:

// “Imagine standing at the root of a tree and looking at each level one by one, moving from left to right, just like reading a book.”


//“Process nodes level by level.”


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


// Example usage:
    
// Creating a sample tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(levelOrderTraversal(root));
// Output: [[1], [2, 3], [4, 5, 6]]

// time complexity: O(n) where n is the number of nodes in the tree
// space complexity: O(m) where m is the maximum number of nodes at any level in the tree (width of the tree)   

// edge cases
console.log(levelOrderTraversal(null)); // Output: []
console.log(levelOrderTraversal(new TreeNode(10))); // Output: [[10]]       


// Height of binary tree

// what is height of binary tree?

// The height of a binary tree is the length of the longest path from the root node to a leaf node. It is measured in terms of the number of edges on that path. A tree with only one node (the root) has a height of 0, while an empty tree has a height of -1.
    
// Mental model:

// “The height of a tree is like the number of steps from the ground (root) to the highest branch (leaf).”
    
function heightOfBinaryTree(node) {
  if (!node) return -1; // height of empty tree is -1   
    let leftHeight = heightOfBinaryTree(node.left); 
    let rightHeight = heightOfBinaryTree(node.right);
    return Math.max(leftHeight, rightHeight) + 1; 
}
    
// Example usage:
console.log(heightOfBinaryTree(root)); // Output: 2 

// time complexity: O(n) where n is the number of nodes in the tree 

// space complexity: O(h) where h is the height of the tree (due to recursion stack)    


// edge cases

console.log(heightOfBinaryTree(null)); // Output: -1 (empty tree)

console.log(heightOfBinaryTree(new TreeNode(10))); // Output: 0 (single node tree)

console.log(heightOfBinaryTree(root.left)); // Output: 1 (subtree with root 2)

