// 42. Get All Substrings of a Given String

// Approach 1: Using Recursive Approach

{
  function SubstringFunction(input) {
    if (input.length === 0) {
      return [""];
    }

    let first = input[0];
    let restSubstrings = SubstringFunction(input.slice(1));

    let substrings = restSubstrings.map((sub) => first + sub);

    return [...substrings, ...restSubstrings];
  }

  let str1 = "abc";
  let result = SubstringFunction(str1);
  console.log(result);
}

// Approach 2: Using Array.reduce() and Array.concat() Methods

{
  function substringFunction(input) {
    return input
      .split("")
      .reduce(
        (substrings, _, i) =>
          substrings.concat(
            Array.from({ length: input.length - i }, (_, j) =>
              input.slice(i, i + j + 1),
            ),
          ),
        [],
      );
  }

  let str1 = "cde";
  console.log(substringFunction(str1));
}
