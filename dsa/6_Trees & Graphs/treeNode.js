// Trees (Recursion with shape)

// what is tree ?

// A tree is a non-linear data structure that consists of nodes connected by edges. It is hierarchical in nature, with a single root node at the top and multiple levels of child nodes below it. Each node can have zero or more child nodes, and there are no cycles in a tree structure.

// Mental model:

// “A tree is like an organizational chart or a family tree, where each person (node) can have multiple children (subordinates or descendants), and there is a clear hierarchy from the top (root) to the bottom (leaves).”

// whats a node?

// A node is a fundamental part of a tree data structure. It contains a value or data and may have references (or pointers) to its child nodes. Each node can be connected to multiple child nodes, forming the hierarchical structure of the tree.

// Mental model:

// “A node is like a box that holds information and has strings attached to other boxes (its children), creating a branching structure.”

class TreeNode {    
    constructor(value) {
        this.value = value;
        this.left = null;  // left child
        this.right = null; // right child
    }
}

// Example usage:

// Creating nodes
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// The tree structure now looks like this:
//        1
//       / \
//      2   3
//     / \
//    4   5


console.log(root);// Output the root node and its structure
// time complexity: O(1) for node creation
// space complexity: O(n) where n is the number of nodes created



