// 44. Left Rotate by One in an Array

{
  function rotationFunction(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    return arr.map((_, index, array) => array[(index + 1) % array.length]);
  }

  let arr1 = [1, 2, 3, 4, 5];
  let result = rotationFunction(arr1);

  console.log("Original Array:", arr1);
  console.log("Array after rotation", result);
}

// Approach 2: Using slice() method

{
  function rotationalArray(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let element1 = arr[0];
    let remainingElement = arr.slice(1);

    return [...remainingElement, element1];
  }

  const arr1 = [10, 20, 30, 40, 50];
  const result = rotationalArray(arr1);

  console.log("Original Array:", arr1);
  console.log("Array after Left Rotate by one :", result);
}
