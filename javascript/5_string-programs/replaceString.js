// 4. Replace All Occurrences of a Substring

// 1. Using string.replace() Method
const str = "welcome to India, welcome to bihar";

{
  // replace welcome with hello

  const newString = str.replace(/welcome/gi, "hello");
  console.log(newString);
}

// 2. Using String split() and join() Methods

{
  const newString = str.split("welcome").join("Hello");
  console.log(newString);
}

// 3. Using replaceAll() Method

{
  const newString = str.replaceAll("welcome", "hello");
  console.log(newString);
}

// 4. Using Regular Expression

{
  const searchString = "welcome";
  const replacementString = "Hello";
  let regex = new RegExp(searchString, "g");
  let replaceString = str.replace(regex, replacementString);
  console.log(replaceString);
}

// 5. Using reduce() Method

{
  const searchString = "welcome";
  const replacementString = "Hi";
  const newString = str
    .split(searchString)
    .reduce((acc, curr, index, array) => {
      return acc + curr + (index < array.length - 1 ? replacementString : "");
    }, "");
  console.log(newString);
}


