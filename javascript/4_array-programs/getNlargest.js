// 33. Get N Largest Elements from an Array

// Brute Force Approach

// Example: If we have n=3 then array largArr will be having a length equal to 3 then we will run for loop one by one to fill the element in the largArr.

{
  let largArr = new Array();
  let arr = new Array(93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60);

  function largest() {
    largArr[0] = 0;
    largArr[1] = 0;
    largArr[2] = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largArr[0]) {
        largArr[0] = arr[i];
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largArr[1] && arr[i] < largArr[0]) {
        largArr[1] = arr[i];
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largArr[2] && arr[i] < largArr[1]) {
        largArr[2] = arr[i];
      }
    }
    console.log(largArr[0]);
    console.log(largArr[1]);

    console.log(largArr[2]);
  }
  largest();
}

// Optimized Solution:

{
  let largArr = new Array();
  let arr = new Array(93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60);

  findLargest3();
  function findLargest3() {
    //   arr.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    arr.sort((a, b) => b - a);
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);

    console.log(arr.slice(0, 3));
  }
}

// Using Math.max and filter() method

{
  function getNLargestELementWithFilter(arr, n) {
    const largestELements = [];
    for (let i = 0; i < n; i++) {
      const max = Math.max(...arr);
      largestELements.push(max);
      arr = arr.filter((num) => num !== max);
    }
    return largestELements;
  }

  const array = [1, 8, 3, 5, 9, 2];
  console.log(getNLargestELementWithFilter(array, 4));
}

// Using Array.reduce

{
  const array = [10, 5, 20, 8, 15];
  const n = 3;
  const largestELements = array.reduce((acc, curr) => {
    if (acc.length < n || curr > acc[acc.length - 1]) {
      acc.push(curr);
    }
    return acc.sort((a, b) => b - a).slice(0, n);
  }, []);

  console.log("Largest Elements:", largestELements);
}
