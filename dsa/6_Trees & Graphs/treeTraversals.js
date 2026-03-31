// Tree traversals: Inorder, Preorder, Postorder
    

// what is tree node?
    
// A tree node is a fundamental part of a tree data structure. It contains a value or data and may have references (or pointers) to its child nodes. Each node can be connected to multiple child nodes, forming the hierarchical structure of the tree.

// what is tree traversal?

// Tree traversal is the process of visiting all the nodes in a tree data structure in a specific order. The three most common types of tree traversals are Inorder, Preorder, and Postorder.

// Mental model:

// “Traversing a tree is like exploring a family tree or organizational chart, where you visit each person (node) in a specific sequence to gather information or perform actions.”

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Inorder Traversal (Left, Root, Right)
function inorderTraversal(node, result = []) {
    if (node) {
        inorderTraversal(node.left, result);
        result.push(node.value);
        inorderTraversal(node.right, result);
    }
    return result;
}

// Preorder Traversal (Root, Left, Right)
function preorderTraversal(node, result = []) {
    if (node) {
        result.push(node.value);
        preorderTraversal(node.left, result);
        preorderTraversal(node.right, result);
    }
    return result;
}

// Postorder Traversal (Left, Right, Root)
function postorderTraversal(node, result = []) {
    if (node) {
        postorderTraversal(node.left, result);
        postorderTraversal(node.right, result);
        result.push(node.value);
    }
    return result;
}

// Example usage:

// Creating a sample tree:
//        1
//       / \
//      2   3
//     / \
//    4   5

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Inorder Traversal:", inorderTraversal(root));   // Output: [4, 2, 5, 1, 3]
console.log("Preorder Traversal:", preorderTraversal(root)); // Output: [1, 2, 4, 5, 3]
console.log("Postorder Traversal:", postorderTraversal(root)); // Output: [4, 5, 2, 3, 1]

// time complexity: O(n) for all traversals
// space complexity: O(h) where h is the height of the tree (due to recursion stack)    



