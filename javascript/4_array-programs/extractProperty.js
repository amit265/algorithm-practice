// 23. Extract Value of a Property as Array from Array of Objects

// Approach 1: Using Array Push

{
  let desiredValue = (fruits_quantity) => {
    let output = [];
    for (let item of fruits_quantity) {
      output.push(item.apple);
    }
    return output;
  };

  let fruits_quantity = [
    {
      apple: 2,
      mango: 4,
    },
    {
      apple: 3,
      mango: 6,
    },
    {
      apple: 7,
      mango: 11,
    },
  ];

  let result = desiredValue(fruits_quantity);
  console.log(result);
}

// Approach 2: Using Map

let desiredValue = (fruits_quantity, desired_key) => {
  let desiredValue = fruits_quantity.map((elm) => elm[desired_key]);
  return desiredValue;
};

let fruits_quantity = [
  {
    apple: 2,
    mango: 4,
  },
  {
    apple: 3,
    mango: 6,
  },
  {
    apple: 7,
    mango: 11,
  },
];

let desired_key = "mango";

let result = desiredValue(fruits_quantity, desired_key);
console.log(result);

// Approach 3: Using reduce()

{
  const objectsArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const names = objectsArray.reduce((acc, obj) => {
    acc.push(obj.name);

    return acc;
  }, []);
  console.log(names);
}

// Approach 4: Using for...of Loop

{
  let objectsArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
  let names = [];
  for (let obj of objectsArray) {
    names.push(obj.name);
  }

  console.log(names);
}
