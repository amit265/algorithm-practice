// 22. Splice an Array Without Mutating the Original Array

//1. Using slice() and concat() Methods - Most Used

{
  const a1 = [1, 2, 3, 4, 5];

  const a2 = a1.slice(0, 1);

  console.log(a2);
}

//2. Using filter() Method for Conditional Removal

{
  const a1 = [1, 2, 3, 4, 5];

  const a2 = a1.filter((_, index) => index !== 1 && index !== 2);
  console.log(a2);
  console.log(a1);
}

//3. Using the Spread Operator and slice() Method

{
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [...a1.slice(0, 1), ...a1.slice(3)];
  console.log(a2);
  console.log(a1);
}

//4. Using map() Method with Conditionals

{
  const a1 = [1, 2, 3, 4, 5];
  const a2 = a1
    .map((el, index) => (index === 1 || index === 2 ? null : el))
    .filter((el) => el !== null);

  console.log(a2);
  console.log(a1);
}


// 