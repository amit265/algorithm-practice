function secondLargest(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Input must be an array");

  if (arr.length < 2)
    throw new Error("Array must contain at least two elements");

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let elm of arr) {
    if (elm > largest) {
      secondLargest = largest;
      largest = elm;
    } else if (elm > secondLargest && elm < largest) {
      secondLargest = elm;
    }
  }

  return secondLargest;
}

console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // 6
console.log(secondLargest([-10, -20, 0, 10, 20])); // 10
console.log(secondLargest([42, 42, 42])); // -Infinity
console.log(secondLargest([5])); // Error: Array must contain at least two elements
