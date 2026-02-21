// 40. Merge Two Arrays Without Creating a New Array

{
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];

  array1.push(...array2);

  console.log(array1);
}

// Using Array concat() Method

{
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];

  // Store the merged array to first array
  array1 = array1.concat(array2);

  console.log(array1);
}

// Using Array splice() Method

{
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];

  array1.splice(array1.length, 0, ...array2);

  console.log(array1);
}

// Using a for Loop

{
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];

  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }

  console.log(array1);
}
