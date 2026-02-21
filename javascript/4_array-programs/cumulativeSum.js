// 39. Calculate the Cumulative Sum of Elements in an Array

// Using the forEach loop approach

{
  let inputArray = [1, 2, 3, 4, 5, 6, 7];
  let cumulativeSum = 0;

  let outputCumulativeSumArray = [];

  inputArray.forEach((elm) => {
    cumulativeSum += elm;
    outputCumulativeSumArray.push(cumulativeSum);
  });

  const outputSum =
    outputCumulativeSumArray[outputCumulativeSumArray.length - 1];
  console.log("Cumulative Sum Array is: ", outputCumulativeSumArray);
  console.log("Total Cumulative Sum: ", outputSum);
}

// Using the map() method in JavaScript

{
  let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let cummulativeSum = 0;

  let cumulativeSumArray = inputArray.map(
    (element) => (cummulativeSum += element),
  );

  let outputSum = cumulativeSumArray[cumulativeSumArray.length - 1];

  console.log("Cumulative Sum Array is:", cumulativeSumArray);
  console.log("Total Cumulative Sum:", outputSum);
}

// Using recursive function

{
  let inputArray = [1, 2, 3, 4];
  let totalCumulativeArray = [];
  let cumulativeSum = 0;
  function calculateCumulativeSumUsingRecursion(index) {
    if (index < inputArray.length) {
      cumulativeSum += inputArray[index];

      totalCumulativeArray.push(cumulativeSum);

      calculateCumulativeSumUsingRecursion(index + 1);
    }
  }

  calculateCumulativeSumUsingRecursion(0);

  let outputSum = totalCumulativeArray[totalCumulativeArray.length - 1];

  console.log("Cumulative Sum Array is:", totalCumulativeArray);
  console.log("total Cumulative Sum:", outputSum);
}

/// Using the reduce Method

{
  function cumulativeSum(arr) {
    let sum = 0;
    return arr.map((num) => (sum += num));
  }

  let array = [2, 3, 4, 5];
  console.log(cumulativeSum(array));
}

// using loop

{
  let inputArray = [1, 2, 3, 4, 5, 6, 7];
  let cummulativeSum = 0;

  let outputCummulativeSumArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    cummulativeSum += inputArray[i];
    outputCummulativeSumArray.push(cummulativeSum);
  }

  const outputSum =
    outputCummulativeSumArray[outputCummulativeSumArray.length - 1];

  console.log("Cumulative Sum Array is:", outputCummulativeSumArray);
  console.log("Total Cumulative Sum:", outputSum);
}
