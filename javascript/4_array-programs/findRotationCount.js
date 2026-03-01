// 45. Find Rotation Count in Rotated Sorted Array

// Approach 1: Using Recursive Approach

{
  function findRotationCount(arr_input, low_part, high_part) {
    if (low_part >= high_part) return 0;

    if (arr_input[low_part] <= arr_input[high_part]) return low_part;

    let mid_part = Math.floor((low_part + high_part) / 2);
    if (
      arr_input[mid_part] < arr_input[mid_part - 1] &&
      arr_input[mid_part] < arr_input[mid_part + 1]
    )
      return mid_part;

    if (arr_input[high_part] > arr_input[mid_part])
      return findRotationCount(arr_input, low_part, mid_part - 1);
    else return findRotationCount(arr_input, mid_part + 1, high_part);
  }

  let inputArray = [4, 5, 6, 7, 1, 2, 3];
  let output = findRotationCount(inputArray, 0, inputArray.length - 1);
  console.log("roation count is: ", output);
}

// Approach 2: Using Modulo Operation Approach

{
  function rotationCountUsingModuloOperation(arrInput) {
    let tempVar = arrInput.length;
    let minimumIndex = 0;
    let minimumValue = arrInput[0];
    for (let i = 1; i < tempVar; i++) {
      if (arrInput[i] < minimumValue) {
        minimumValue = arrInput[i];
        minimumIndex = i;
      }
    }

    var rotationCountValue = minimumIndex % tempVar;
    return rotationCountValue;
  }

  let inputArray = [6, 7, 8, 1, 2, 3, 4, 5];
  let output = rotationCountUsingModuloOperation(inputArray);
  console.log("Rotation count is: ", output);
}



// Approach 3: Using Repeated Concatenation and Substring

{
}