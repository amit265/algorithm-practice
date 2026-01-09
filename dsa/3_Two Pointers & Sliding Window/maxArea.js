// container with most water

// function to calculate max area

// what is max area ?

// max area is a problem where we need to find two lines that together with the x-axis form a container, such that the container contains the most water.

// example :
// input: height = [1,8,6,2,5,4,8,3,7]
// output: 49
// explanation: the max area is formed between the lines at index 1 and index 8, which gives an area of 49.

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}


// test the function

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49

console.log(maxArea([1,1])); // Output: 1

console.log(maxArea([4,3,2,1,4])); // Output: 16

console.log(maxArea([1,2,1])); // Output: 2

console.log(maxArea([1,3,2,5,25,24,5])); // Output: 24

console.log(maxArea([2,3,4,5,18,17,6])); // Output: 17