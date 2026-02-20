// 30. Find the Array Index with a Value

// Using indexOf() - Most Used

{
  const a = [10, 20, 30, 40, 50];

  const index = a.indexOf(30);

  console.log(index);

  // Value not found
  const notFound = a.indexOf(60);
  console.log(notFound);
}

// Using findIndex() for Complex Conditions

{
  const a = [10, 15, 20, 30, 40, 50];
  // find index of first value greater than 18

  const index = a.findIndex((value) => value > 18);
  console.log(index);
}

// Using for Loop for Custom Search

{
  const a = [5, 10, 15, 20, 25];
  let index = -1;
  // find index of value 20

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 25) {
      index = i;
      break;
    }
  }
  console.log(index);
}

// Using lastIndexOf() for Reverse Search

{
  const a = [5, 10, 15, 1, 5];
  const index = a.lastIndexOf(10);
  console.log(index);
}
