// Diameter of Binary Tree
    
// what is diameter of binary tree?

// The diameter of a binary tree is defined as the length of the longest path between any two nodes in the tree. This path may or may not pass through the root node. The length is measured in terms of the number of edges on that path.
    
// Mental model:
// “The diameter is like the longest distance you can travel between any two points in a network of roads (the tree), regardless of whether you pass through the main intersection (the root) or not.”

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root) {
    let diameter = 0;

    function height(node) {
        if (!node) return 0;

        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        // Update the diameter if the path through this node is larger
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of the node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return diameter;
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

console.log(diameterOfBinaryTree(root)); // Output: 4 (path: 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3)

// time complexity: O(n) where n is the number of nodes in the tree
// space complexity: O(h) where h is the height of the tree (due to recursion stack)

// edge cases
console.log(diameterOfBinaryTree(null)); // Output: 0
console.log(diameterOfBinaryTree(new TreeNode(10))); // Output: 0   

    