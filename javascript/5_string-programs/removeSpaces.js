// 21. Remove Spaces from a String

// 1. Using string.split() and array.join() Methods

{
  let s = " Geeks for Geeks ";
  let res = s.split(" ").join("");
  console.log(res);
}

// 2. Using string.replaceAll() Method

{
  let s = "  Geeks for Geeks   ";
  let res = s.replaceAll(" ", "");
  console.log(res);
}

// 3. Using string.trim() Method
//The JavaScript string.trim() method removes leading and trailing whitespace from a string.

{
  let s = "  Geeks for Geeks   ";
  let res = s.trim();
  console.log(res);
}

// 4. Using Lodash _.trim() Method

// {
//   const _ = require("lodash");
//   let s = "  Geeks for Geeks   ";
//   let res = _.trim(s);
//   console.log(res);
// }

// 5. Using Regular Expressions with string.replace() Method

{
  let s = " Geeks for Geeks ";
  let res = s.replace(/\s+/g, "");
  console.log(res);
}

// 6. Using string.match() with array.join() Method

{
  let s = "  Geeks for Geeks   ";
  let res = s.match(/\S+/g).join("");
  console.log(res);
}
