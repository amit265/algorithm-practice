// 11. Convert an Object to String

let obj_to_str = {
  name: "javascript",
  city: "delhi",
  contact: 91,
};

// 1. Using String() Constructor

{
  // Inputs
  let bool_to_s1 = Boolean(0);
  let bool_to_s2 = Boolean(1);
  let num_to_s = 1234;

  // Display type of first input
  console.log(typeof bool_to_s1);

  // After converting to string
  console.log(typeof String(bool_to_s1));

  // Display type of first input
  console.log(typeof bool_to_s2);

  // After converting to string
  console.log(typeof String(bool_to_s2));

  // Display type of first input
  console.log(typeof num_to_s);

  // After converting to string
  console.log(typeof String(num_to_s));
}

// 2. Using JSON.stringify() Method

{
  // Input object
  let obj_to_str = {
    name: "GeeksForGeeks",
    city: "Noida",
    contact: 2488,
  };

  // Converion to string
  let myJSON = JSON.stringify(obj_to_str);

  // Display output
  console.log(myJSON);
}

// 3. Using plus (+) Operator with string

{
  // Input objects
  let obj1 = new Object();
  let obj2 = { ww: 99, ss: 22 };

  // Display type of objects before
  // and after their conversion
  console.log(typeof obj1);
  console.log(typeof ("" + obj1));
  console.log(typeof obj2);
  console.log(typeof ("" + obj2));
}

// 4. Using toString() method

{
  // Input object
  let obj = {
    name: "GeeksForGeeks",
    city: "Noida",
    contact: 2488,
  };

  // Conversion to string using toString() method
  let objStr = obj.toString();

  // Display output
  console.log(objStr);
}

// 5. Using Template Literals

{
  const obj = { name: "Alice", age: 25, job: "Developer" };
  const objToString = `Name: ${obj.name}, Age: ${obj.age}, Job: ${obj.job}`;
  console.log(objToString); // Output: "Name: Alice, Age: 25, Job: Developer"
}
