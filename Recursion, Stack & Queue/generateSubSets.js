// function to generate all subsets of a given set using recursion

// what is subset ?

// A subset is a set that contains some or all elements of another set
// For example, the subsets of the set {1, 2} are {}, {1}, {2}, and {1, 2}

function generateSubSets(nums) {
  const result = [];

  function backtrack(index, current) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    // include
    current.push(nums[index]);
    backtrack(index + 1, current);

    // exclude
    current.pop();
    backtrack(index + 1, current);
  }

  backtrack(0, []);
  return result;
}

// time complexity: O(2^n)
// space complexity: O(n) due to call stack


// test the function

console.log(generateSubSets([1, 2]));
// Output: [ [], [ 1 ], [ 1, 2 ], [ 2 ] ]

console.log(generateSubSets([1, 2, 3]));
// Output: [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

console.log(generateSubSets(["a", "b"]));
// Output: [ [], [ 'a' ], [ 'a', 'b' ], [ 'b' ] ]

console.log(generateSubSets(["x", "y", "z"]));
// Output: [ [], [ 'x' ], [ 'x', 'y' ], [ 'x', 'y', 'z' ], [ 'x', 'z' ], [ 'y' ], [ 'y', 'z' ], [ 'z' ] ]

console.log(generateSubSets([]));
// Output: [ [] ]
