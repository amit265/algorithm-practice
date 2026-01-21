# Algorithm Practice

This repository contains my solutions and notes for:

- Data Structures and Algorithms (DSA)
- Project Euler problems

The purpose of this repository is practice and learning.
Solutions may include brute-force attempts, optimized versions,
and notes explaining the thought process.

## Structure

### DSA

-   **1_arrays**:
    -   `find_min_max.js`: Finds the minimum and maximum values in an array.
    -   `isArraySorted.js`: Checks if an array is sorted in ascending order.
    -   `majorityElement.js`: Finds the majority element in an array (appears more than n/2 times).
    -   `max_value.js`: Finds the top two maximum values in an array.
    -   `maxSubArray.js`: Finds the contiguous subarray with the largest sum (Kadane's Algorithm).
    -   `missingNumber.js`: Finds the missing number in an array of size n containing numbers from 0 to n.
    -   `moveZerosToEnd.js`: Moves all zeros to the end of an array.
    -   `print_array_compute_sum.js`: Prints the elements of an array and computes their sum.
    -   `removeDuplicates.js`: Removes duplicates from a sorted array.
    -   `reverse_array.js`: Reverses an array in place.
    -   `rotate_array_by_k_position.js`: Rotates an array to the right by k positions.
    -   `second_largest.js`: Finds the second largest element in an array.
-   **2_Strings + HashMaps**:
    -   `containsDuplicate.js`: Checks if a string contains duplicate characters.
    -   `firstRepeating.js`: Finds the first repeating character in a string.
    -   `firstUniqueChar.js`: Finds the first unique character in a string.
    -   `isAnagram.js`: Checks if two strings are anagrams of each other.
    -   `lengthOfLongestSubstring.js`: Finds the length of the longest substring without repeating characters.
    -   `longestCommonPrefix.js`: Finds the longest common prefix among an array of strings.
    -   `palindrome.js`: Checks if a string is a palindrome.
    -   `removeDuplicates.js`: Removes duplicate characters from a string.
    -   `reverseString.js`: Reverses the words in a string.
    -   `twoSum.js`: Finds two numbers in an array that add up to a specific target sum.
-   **3_Two Pointers & Sliding Window**:
    -   `isPalindrome.js`: Checks if a string is a palindrome, ignoring non-alphanumeric characters and case.
    -   `longestKDistinctChar.js`: Finds the length of the longest substring with at most K distinct characters.
    -   `longestSubstring.js`: Finds the length of the longest substring without repeating characters.
    -   `maxArea.js`: Finds the container with the most water.
    -   `maxSumSubarray.js`: Finds the maximum sum of a contiguous subarray of size k.
    -   `mergeTwoSortedArray.js`: Merges two sorted arrays into one sorted array.
    -   `removeDuplicates.js`: Removes duplicates from a sorted array in-place.
    -   `trap.js`: Calculates the amount of water that can be trapped between bars of different heights.
    -   `twoSumSorted.js`: Finds two numbers in a sorted array that add up to a specific target sum.
-   **4_Recursion, Stack & Queue**:
    -   `factorial.js`: Calculates the factorial of a number using recursion.
    -   `fibonacci.js`: Calculates the nth Fibonacci number using recursion.
    -   `firstNonRepeating.js`: Finds the first non-repeating character in a stream of characters.
    -   `generateSubSets.js`: Generates all subsets of a given set using recursion.
    -   `isPalindrome.js`: Checks if a string is a palindrome using recursion.
    -   `minStack.js`: Implements a stack that supports retrieving the minimum element in O(1) time.
    -   `nextGreaterElement.js`: Finds the next greater element for each element in an array.
    -   `queue.js`: Implements a queue data structure using an array.
    -   `reverseString.js`: Reverses a string using recursion.
    -   `validParentheses.js`: Checks if a string of parentheses is valid.
-   **5_Linked List & Binary Search**:
    -   `binarySearch.js`: Implements the binary search algorithm to find a target value in a sorted array.
    -   `findMinInRotatedSortedArray.js`: Finds the minimum element in a rotated sorted array.
    -   `firstOccurrence.js`: Finds the first occurrence of a target value in a sorted array.
    -   `hasCycle.js`: Detects if a linked list has a cycle using Floyd's Tortoise and Hare algorithm.
    -   `mergeTwoLists.js`: Merges two sorted linked lists into a new sorted linked list.
    -   `middleNode.js`: Finds the middle node of a linked list.
    -   `removeNthFromEnd.js`: Removes the nth node from the end of a linked list.
    -   `reverseList.js`: Reverses a linked list.
    -   `searchInRotatedSortedArray.js`: Searches for a target value in a rotated sorted array.
-   **6_Trees & Graphs**:
    -   `bfs.js`: Implements Breadth-First Search for traversing a graph.
    -   `dfs.js`: Implements Depth-First Search for traversing a graph.
    -   `diameterOfBinaryTree.js`: Calculates the diameter of a binary tree.
    -   `graphRepresentation.js`: Represents a graph using an adjacency list.
    -   `hasCycle.js`: Detects if a graph has a cycle using DFS.
    -   `isValidBST.js`: Validates if a binary tree is a Binary Search Tree.
    -   `levelOrderTraversal.js`: Performs a level order traversal on a binary tree.
    -   `lowestCommonAncestor.js`: Finds the lowest common ancestor of two nodes in a a binary tree.
    -   `numIsLands.js`: Counts the number of islands in a 2D grid.
    -   `treeNode.js`: Defines a `TreeNode` class for a binary tree.
    -   `treeTraversals.js`: Implements inorder, preorder, and postorder traversals for a binary tree.
-   **7_Greedy, Bit Manipulation & Full Revision**:
    -   `activitySelection.js`: Solves the activity selection problem using a greedy approach.
    -   `canCompleteCircuit.js`: Determines if a car can complete a circular circuit.
    -   `countBits.js`: Counts the number of set bits in an integer.
    -   `final.js`: A revision list of high-probability interview questions.
    -   `isPowerOfTwo.js`: Checks if a number is a power of two using bit manipulation.
    -   `minPlatforms.js`: Finds the minimum number of platforms required for a railway station.
    -   `singleNumber.js`: Finds the single number that appears only once in an array.
    -   `swap.js`: Swaps two variables using XOR.

### Namaste Dev

-   **30DayDSAChallenge**:
    -   `containsDuplicate.js`: Checks if an array contains duplicate values.
    -   `maxSubArray.js`: Finds the contiguous subarray with the largest sum using Kadane's algorithm.
    -   `productOfArrayExceptSelf.js`: Calculates the product of all elements in an array except self.
    -   `reverseString.js`: Reverses a string using a two-pointer approach.
    -   `twoSum.js`: Finds two numbers in an array that add up to a specific target sum.
    -   `validAnagram.js`: Checks if two strings are anagrams of each other.
    -   `validPalindrome.js`: Checks if a string is a palindrome, ignoring non-alphanumeric characters and case.

### Project Euler

-   **Phase 1 (1-40)**:
    -   `project_euler_1_to_40_detailed.txt`
    -   **1-10**:
        -   `fiboEvenSum.js`: Calculates the sum of even-valued Fibonacci numbers up to a limit.
        -   `largestPalindromeProduct.js`: Finds the largest palindrome made from the product of two n-digit numbers.
        -   `largestPrimeFactor.js`: Finds the largest prime factor of a given number.
        -   `largestProductinaSeries.js`: Finds the largest product of k adjacent digits in a number string.
        -   `multiplesOf3Or5.js`: Finds the sum of all multiples of 3 or 5 below a given number.
        -   `nthPrime.js`: Finds the nth prime number.
        -   `primeSummation.js`: Calculates the sum of all prime numbers below a given number.
        -   `smallestMult.js`: Finds the smallest positive number divisible by all numbers from 1 to n.
        -   `specialPythagoreanTriplet.js`: Finds the product of the Pythagorean triplet for which a + b + c = n.
        -   `sumSquareDifference.js`: Calculates the difference between the square of the sum and the sum of the squares of the first n natural numbers.
    -   **11-20**:
        -   `divisibleTriangleNumber.js`: Finds the first triangle number to have over n divisors.
        -   `largestGridProduct.js`: Finds the largest product of four adjacent numbers in a 20×20 grid.
        -   `largeSum.js`: Finds the first ten digits of the sum of one-hundred 50-digit numbers.
        -   `latticePaths.js`: Calculates the number of routes through an n×n grid.
        -   `longestCollatzSequence.js`: Finds the starting number under one million that produces the longest Collatz sequence.
        -   `powerDigitSum.js`: Calculates the sum of the digits of the number 2^n.
    -   **21-30**:
        -   ...
    -   **31-40**:
        -   ...
-   **Phase 2 (41-70)**:
    -   `project_euler_41_to_70_detailed.txt`
    -   **41-50**:
        -   ...
    -   **51-60**:
        -   ...
    -   **61-70**:
        -   ...
-   **Phase 3 (71-100)**:
    -   `project_euler_71_to_100_detailed.txt`
    -   **71-80**:
        -   ...
    -   **81-90**:
        -   ...
    -   **91-100**:
        -   ...

## Languages Used

-   JavaScript