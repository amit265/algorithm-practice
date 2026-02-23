// 43. Check if an Array Contains only Unique Values

// Using of JavaScript Set

{
  function checkDistinct(array) {
    const checkSet = new Set(array);

    return checkSet.size === array.length;
  }
  // Input 1
  const input1 = [7, 8, 1, 5, 9];
  console.log(checkDistinct(input1));

  // Input 2
  const input2 = [7, 8, 1, 5, 5];
  console.log(checkDistinct(input2));
}

// Using of indexOf() Method

{
  function checkDistinct(array) {
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(array[i]) !== i) {
        return false;
      }
    }
    return true;
  }
  // Input1
  const input1 = [7, 8, 1, 5, 9];
  console.log(checkDistinct(input1));

  //Input2
  const input2 = [7, 8, 1, 5, 5];
  console.log(checkDistinct(input2));
}

// Using Array.filter() and Array.includes()

{
  function hasUniqueValues(arr) {
    return (
      arr.filter((value, index, self) => self.indexOf(value) === index)
        .length === arr.length
    );
  }
  console.log(hasUniqueValues([1, 2, 3, 4, 5])); // true
  console.log(hasUniqueValues([1, 2, 3, 4, 5, 6, 1])); // true
}

// Using Array.sort() and Array.every()

{
  function checkDistinct(array) {
    array.sort((a, b) => a - b);

    return array.every(
      (value, index) => index === 0 || value !== array[index - 1],
    );
  }

  // Input 1
  const input1 = [7, 8, 1, 5, 9];
  console.log(checkDistinct(input1));

  // Input 2
  const input2 = [7, 8, 1, 5, 5];
  console.log(checkDistinct(input2));
}

// Using an object to track seen values
{
  function hasUniqueValues(arr) {
    let seen = {};
    for (let val of arr) {
      if (seen[val]) {
        return false;
      }

      seen[val] = true;
    }

    return true;
  }

  console.log(hasUniqueValues([1, 2, 3, 4, 4]));
  console.log(hasUniqueValues([1, 2, 2, 4]));
}
