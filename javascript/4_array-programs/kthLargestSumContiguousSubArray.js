// 41. K-th Largest Sum Contiguous Subarray

// Using Brute Force

{
  function kthLargestSum(arr, N, K) {
    let result = [];
    // generate all sub arrays
    for (let i = 0; i < N; i++) {
      let sum = 0;
      for (let j = i; j < N; j++) {
        sum += arr[j];
        result.push(sum);
      }
    }
    result.sort((a, b) => a - b);
    result.reverse();
    console.log(result);
    return result[K - 1];
  }

  let a = [20, -5, -1];
  let N = a.length;
  let K = 3;
  console.log(kthLargestSum(a, N, K));
}

// Using Min-Heap

class MinHeap {
  constructor() {
    this.heap = [];
  }
  // Adds a value and "bubbles it up" to the right spot
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  // removes and returns the smallest value

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      // if parent is already smaller , we are done
      if (this.heap[parentIndex] <= this.heap[index]) break;

      // swap parent and child

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      // Check if left child is smaller than current
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      // Check if right child is smaller than current/left
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break; // Correct spot found

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

// PART 2: The Logic for K-th Largest Subarray Sum
function getKthLargestSum(arr, k) {
  const n = arr.length;
  const minHeap = new MinHeap();

  // 1. Calculate all possible subarray sums
  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += arr[j];

      // 2. Maintain a heap of size K
      if (minHeap.size() < k) {
        minHeap.push(currentSum);
      } else {
        // If current sum is bigger than the smallest in our "Top K" list
        if (currentSum > minHeap.peek()) {
          minHeap.pop(); // Remove the smallest
          minHeap.push(currentSum); // Add the new larger sum
        }
      }
    }
  }

  // 3. The root of the Min-Heap is the K-th largest element
  return minHeap.peek();
}

// Example usage:
const nums = [20, -5, -1];
const k = 3;
console.log("K-th Largest Subarray Sum:", getKthLargestSum(nums, k));
// Output: 14
