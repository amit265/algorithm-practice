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

// Approach 3: Using shift() and push() method

{
  function ratationalArray(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let elem1 = arr.shift();
    arr.push(elem1);

    return arr;
  }

  let arr1 = [15, 16, 17, 18, 19];
  let result = ratationalArray([...arr1]);

  console.log("Original Array:", arr1);
  console.log("Array after Left Rotation:", result);
}

// Approach 4: Using for loop

{
  function leftRotateByOne(arr) {
    const temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    return arr;
  }
  const arr = [1, 2, 3, 4, 5];
  console.log("Rotated Array:", leftRotateByOne(arr));
}

// Approach 5: Using destructuring assignment and the spread operator

{
  function leftRotateByOne(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const [first, ...rest] = arr;
    const [firsts, ...third] = arr;
    console.log([firsts, ...third]);
    return [...rest, first];
  }

  const arr = [1, 2, 3, 4, 5];
  console.log("Rotated Array", leftRotateByOne(arr));
}

// Approach 6: Using the reduce() Method

{
  function leftRotateByOneUsingReduce(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    console.log([...arr.slice(1)]);
    return [...arr.slice(1).reduce((acc, curr) => [...acc, curr], []), arr[0]];
  }
  const arr = [6, 7, 8, 9, 10];
  const result = leftRotateByOneUsingReduce(arr);
  console.log("original array = ", arr);
  console.log("array after left rotation =", result);
}

// Approach 7: Using Array destructuring and Array.prototype.concat()

{
  function leftRotateByOne(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const [first, ...rest] = arr;
    return rest.concat(first);
  }

  const array = [10, 20, 30, 40, 50];
  console.log("original array:", array);
  const rotatedArray = leftRotateByOne(arr);
  console.log("Array after left rotate by one:", rotatedArray);
}
