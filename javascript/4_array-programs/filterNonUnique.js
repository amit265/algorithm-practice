// 32. Filter the Non-unique Values in an Array

// Using the filter() method

{
  let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];

  console.log("Before filtering non unique values: " + array);

  let unique = array.filter((value) => {
    return array.indexOf(value) === array.lastIndexOf(value);
  });

  console.log("After filtering non unique values: " + unique);
}

// Using for loop

{
  const array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];

  console.log("Before filtering non unique values: " + array);

  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (array.lastIndexOf(array[i]) === array.indexOf(array[i])) {
      unique.push(array[i]);
    }
  }

  console.log("After filtering non unique values: " + unique);
}

// Using Set and filter

{
  function filterNonUniqueUsingSet(arr) {
    const uniqueItems = new Set(
      arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item)),
    );
    return [...uniqueItems];
  }

  const array = [1, 2, 2, 3, 4, 4, 5];
  console.log(filterNonUniqueUsingSet(array));
}

// Using the reduce() Method

{
  const array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
  console.log("Before filtering non unique values: " + array);

  const frequencyMap = array.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  const unique = array.filter((value) => frequencyMap[value] === 1);

  console.log("After filtering non unique values: " + unique);
}
