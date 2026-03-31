// anchor problem: Trapping rain water

// function to calculate trapped rain water

// what is trapping rain water ?

// trapping rain water is a problem where we need to find the amount of water that can be trapped between the bars of different heights after raining.

// example :
// input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// output: 6
// explanation: the amount of water that can be trapped is 6 units.

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      waterTrapped += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      waterTrapped += rightMax - height[right];
      right--;
    }
  }

  return waterTrapped;
}


// test the function

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6

console.log(trap([4,2,0,3,2,5])); // Output: 9

console.log(trap([1,0,2,1,0,1,3])); // Output: 5

console.log(trap([5,4,1,2])); // Output: 1

console.log(trap([2,0,2])); // Output: 2

console.log(trap([3,0,0,2,0,4])); // Output: 10

console.log(trap([0,0,0,0])); // Output: 0

console.log(trap([1,2,3,4,5])); // Output: 0
