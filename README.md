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
    -   1.1 `find_min_max.js`: Finds the minimum and maximum values in an array.
    -   1.2 `isArraySorted.js`: Checks if an array is sorted in ascending order.
    -   1.3 `majorityElement.js`: Finds the majority element in an array (appears more than n/2 times).
    -   1.4 `max_value.js`: Finds the top two maximum values in an array.
    -   1.5 `maxSubArray.js`: Finds the contiguous subarray with the largest sum (Kadane's Algorithm).
    -   1.6 `missingNumber.js`: Finds the missing number in an array of size n containing numbers from 0 to n.
    -   1.7 `moveZerosToEnd.js`: Moves all zeros to the end of an array.
    -   1.8 `print_array_compute_sum.js`: Prints the elements of an array and computes their sum.
    -   1.9 `removeDuplicates.js`: Removes duplicates from a sorted array.
    -   1.10 `reverse_array.js`: Reverses an array in place.
    -   1.11 `rotate_array_by_k_position.js`: Rotates an array to the right by k positions.
    -   1.12 `second_largest.js`: Finds the second largest element in an array.
-   **2_Strings + HashMaps**:
    -   2.1 `containsDuplicate.js`: Checks if a string contains duplicate characters.
    -   2.2 `firstRepeating.js`: Finds the first repeating character in a string.
    -   2.3 `firstUniqueChar.js`: Finds the first unique character in a string.
    -   2.4 `isAnagram.js`: Checks if two strings are anagrams of each other.
    -   2.5 `lengthOfLongestSubstring.js`: Finds the length of the longest substring without repeating characters.
    -   2.6 `longestCommonPrefix.js`: Finds the longest common prefix among an array of strings.
    -   2.7 `palindrome.js`: Checks if a string is a palindrome.
    -   2.8 `removeDuplicates.js`: Removes duplicate characters from a string.
    -   2.9 `reverseString.js`: Reverses the words in a string.
    -   2.10 `twoSum.js`: Finds two numbers in an array that add up to a specific target sum.
-   **3_Two Pointers & Sliding Window**:
    -   3.1 `isPalindrome.js`: Checks if a string is a palindrome, ignoring non-alphanumeric characters and case.
    -   3.2 `longestKDistinctChar.js`: Finds the length of the longest substring with at most K distinct characters.
    -   3.3 `longestSubstring.js`: Finds the length of the longest substring without repeating characters.
    -   3.4 `maxArea.js`: Finds the container with the most water.
    -   3.5 `maxSumSubarray.js`: Finds the maximum sum of a contiguous subarray of size k.
    -   3.6 `mergeTwoSortedArray.js`: Merges two sorted arrays into one sorted array.
    -   3.7 `removeDuplicates.js`: Removes duplicates from a sorted array in-place.
    -   3.8 `trap.js`: Calculates the amount of water that can be trapped between bars of different heights.
    -   3.9 `twoSumSorted.js`: Finds two numbers in a sorted array that add up to a specific target sum.
-   **4_Recursion, Stack & Queue**:
    -   4.1 `factorial.js`: Calculates the factorial of a number using recursion.
    -   4.2 `fibonacci.js`: Calculates the nth Fibonacci number using recursion.
    -   4.3 `firstNonRepeating.js`: Finds the first non-repeating character in a stream of characters.
    -   4.4 `generateSubSets.js`: Generates all subsets of a given set using recursion.
    -   4.5 `isPalindrome.js`: Checks if a string is a palindrome using recursion.
    -   4.6 `minStack.js`: Implements a stack that supports retrieving the minimum element in O(1) time.
    -   4.7 `nextGreaterElement.js`: Finds the next greater element for each element in an array.
    -   4.8 `queue.js`: Implements a queue data structure using an array.
    -   4.9 `reverseString.js`: Reverses a string using recursion.
    -   4.10 `validParentheses.js`: Checks if a string of parentheses is valid.
-   **5_Linked List & Binary Search**:
    -   5.1 `binarySearch.js`: Implements the binary search algorithm to find a target value in a sorted array.
    -   5.2 `findMinInRotatedSortedArray.js`: Finds the minimum element in a rotated sorted array.
    -   5.3 `firstOccurrence.js`: Finds the first occurrence of a target value in a sorted array.
    -   5.4 `hasCycle.js`: Detects if a linked list has a cycle using Floyd's Tortoise and Hare algorithm.
    -   5.5 `mergeTwoLists.js`: Merges two sorted linked lists into a new sorted linked list.
    -   5.6 `middleNode.js`: Finds the middle node of a linked list.
    -   5.7 `removeNthFromEnd.js`: Removes the nth node from the end of a linked list.
    -   5.8 `reverseList.js`: Reverses a linked list.
    -   5.9 `searchInRotatedSortedArray.js`: Searches for a target value in a rotated sorted array.
-   **6_Trees & Graphs**:
    -   6.1 `bfs.js`: Implements Breadth-First Search for traversing a graph.
    -   6.2 `dfs.js`: Implements Depth-First Search for traversing a graph.
    -   6.3 `diameterOfBinaryTree.js`: Calculates the diameter of a binary tree.
    -   6.4 `graphRepresentation.js`: Represents a graph using an adjacency list.
    -   6.5 `hasCycle.js`: Detects if a graph has a cycle using DFS.
    -   6.6 `isValidBST.js`: Validates if a binary tree is a Binary Search Tree.
    -   6.7 `levelOrderTraversal.js`: Performs a level order traversal on a binary tree.
    -   6.8 `lowestCommonAncestor.js`: Finds the lowest common ancestor of two nodes in a a binary tree.
    -   6.9 `numIsLands.js`: Counts the number of islands in a 2D grid.
    -   6.10 `treeNode.js`: Defines a `TreeNode` class for a binary tree.
    -   6.11 `treeTraversals.js`: Implements inorder, preorder, and postorder traversals for a binary tree.
-   **7_Greedy, Bit Manipulation & Full Revision**:
    -   7.1 `activitySelection.js`: Solves the activity selection problem using a greedy approach.
    -   7.2 `canCompleteCircuit.js`: Determines if a car can complete a circular circuit.
    -   7.3 `countBits.js`: Counts the number of set bits in an integer.
    -   7.4 `final.js`: A revision list of high-probability interview questions.
    -   7.5 `isPowerOfTwo.js`: Checks if a number is a power of two using bit manipulation.
    -   7.6 `minPlatforms.js`: Finds the minimum number of platforms required for a railway station.
    -   7.7 `singleNumber.js`: Finds the single number that appears only once in an array.
    -   7.8 `swap.js`: Swaps two variables using XOR.

### Namaste Dev

-   **30DayDSAChallenge**:
    -   1. `containsDuplicate.js`: Checks if an array contains duplicate values.
    -   2. `longestCommonPrefix.js`: Finds the longest common prefix string amongst an array of strings.
    -   3. `maxProfit.js`: Finds the maximum profit from a single buy-sell transaction.
    -   4. `maxSubArray.js`: Finds the contiguous subarray with the largest sum using Kadane's algorithm.
    -   5. `moveZeroes.js`: Moves all zeros to the end of an array.
    -   6. `productOfArrayExceptSelf.js`: Calculates the product of all elements in an array except self.
    -   7. `reverseString.js`: Reverses a string using a two-pointer approach.
    -   8. `twoSum.js`: Finds two numbers in an array that add up to a specific target sum.
    -   9. `validAnagram.js`: Checks if two strings are anagrams of each other.
    -   10. `validPalindrome.js`: Checks if a string is a palindrome, ignoring non-alphanumeric characters and case.

### Project Euler

-   **Phase 1 (1-40)**:
    -   `project_euler_1_to_40_detailed.txt`
    -   **1-10**:
        -   1. `fiboEvenSum.js`: Calculates the sum of even-valued Fibonacci numbers up to a limit.
        -   2. `largestPalindromeProduct.js`: Finds the largest palindrome made from the product of two n-digit numbers.
        -   3. `largestPrimeFactor.js`: Finds the largest prime factor of a given number.
        -   4. `largestProductinaSeries.js`: Finds the largest product of k adjacent digits in a number string.
        -   5. `multiplesOf3Or5.js`: Finds the sum of all multiples of 3 or 5 below a given number.
        -   6. `nthPrime.js`: Finds the nth prime number.
        -   7. `primeSummation.js`: Calculates the sum of all prime numbers below a given number.
        -   8. `smallestMult.js`: Finds the smallest positive number divisible by all numbers from 1 to n.
        -   9. `specialPythagoreanTriplet.js`: Finds the product of the Pythagorean triplet for which a + b + c = n.
        -   10. `sumSquareDifference.js`: Calculates the difference between the square of the sum and the sum of the squares of the first n natural numbers.
    -   **11-20**:
        -   1. `divisibleTriangleNumber.js`: Finds the first triangle number to have over n divisors.
        -   2. `largestGridProduct.js`: Finds the largest product of four adjacent numbers in a 20×20 grid.
        -   3. `largeSum.js`: Finds the first ten digits of the sum of one-hundred 50-digit numbers.
        -   4. `latticePaths.js`: Calculates the number of routes through an n×n grid.
        -   5. `longestCollatzSequence.js`: Finds the starting number under one million that produces the longest Collatz sequence.
        -   6. `powerDigitSum.js`: Calculates the sum of the digits of the number 2^n.
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