// Validate Binary Search Tree

// what is valid binary search tree?
    
// A valid binary search tree (BST) is a binary tree in which for every node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater than the node's value. This property must hold true for all nodes in the tree.

// Mental model:
    
// “A binary search tree is like a sorted library where each book (node) has all the books with smaller titles (values) to its left and all the books with larger titles to its right.”

class TreeNode {
    constructor(value) {    
        this.value = value;
        this.left = null;  
        this.right = null; 
    }
}

function isValidBST(root) {
    function validate(node, low = -Infinity, high = Infinity) {
        if (!node) return true;

        if (node.value <= low || node.value >= high) {
            return false;
        }

        return validate(node.left, low, node.value) && 
               validate(node.right, node.value, high);
    }

    return validate(root);
}

// Example usage:

// Creating a sample valid BST:
//        2
//       / \
//      1   3

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValidBST(root)); // Output: true

// Creating a sample invalid BST:
//        5
//       / \
//      1   4
//         / \
//        3   6

let root2 = new TreeNode(5);
root2.left = new TreeNode(1);
root2.right = new TreeNode(4);
root2.right.left = new TreeNode(3);
root2.right.right = new TreeNode(6);

console.log(isValidBST(root2)); // Output: false

// time complexity: O(n) where n is the number of nodes in the tree
// space complexity: O(h) where h is the height of the tree (due to recursion stack)    

// edge cases
console.log(isValidBST(null)); // Output: true (an empty tree is a valid BST)
console.log(isValidBST(new TreeNode(10))); // Output: true (a single node tree is a valid BST)  

