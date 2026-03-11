// 3. Reverse a String

// 1. Using split(), reverse() and join()

{
  const str = "hello";
  let reverse = str.split("").reverse().join("");
  console.log(reverse);
}

// 2. Using a for loop

{
  let str = "heythere";
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
}

// 3. Using Recursion

{
  function reverseString(str) {
    if (str === "") {
      return str;
    } else {
      return reverseString(str.substr(1)) + str[0];
    }
  }

  console.log(reverseString("hello"));
}

// 4. Using Spread Operator

{
  let s = "hello";
  const reverse = [...s].reverse().join("");
  console.log(reverse);
}
