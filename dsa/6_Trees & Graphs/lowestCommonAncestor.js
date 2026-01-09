// Lowest Common Ancestor (Binary Tree)

// what is lowest common ancestor?
    
// The lowest common ancestor (LCA) of two nodes in a binary tree is defined as the deepest node that is an ancestor of both nodes. In other words, it is the lowest node in the tree that has both nodes as descendants (where we allow a node to be a descendant of itself).

// Mental model:

// “The lowest common ancestor is like the closest shared manager in an organizational chart for two employees.”

class TreeNode {
    constructor(value) {    
        this.value = value;
        this.left = null;  
        this.right = null; 
    }
}

function lowestCommonAncestor(root, p, q) {
    if (!root) return null;

    // If the current node is one of the targets, return it
    if (root === p || root === q) return root;

    // Search in left and right subtrees
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If both left and right are non-null, current node is LCA
    if (left && right) return root;

    // Otherwise return the non-null child
    return left ? left : right;
}

// Example usage:

// Creating a sample tree:
//        3
//       / \
//      5   1
//     / \ / \
//    6  2 0  8
//      / \
//   7   4
let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);       

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

let p = root.left; // Node with value 5
let q = root.left.right.right; // Node with value 4

let lca = lowestCommonAncestor(root, p, q);
console.log(lca.value); // Output: 5

// time complexity: O(n) where n is the number of nodes in the tree
// space complexity: O(h) where h is the height of the tree (due to recursion stack)

// edge cases
console.log(lowestCommonAncestor(null, p, q)); // Output: null
console.log(lowestCommonAncestor(root, root, root.right)); // Output: 3 