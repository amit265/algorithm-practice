// 32. Find the Longest Word Within the String

// Approach 1: Using regex and for...loop

{
  function longest(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i].length > largest.length) {
        largest = str[i];
      }
    }

    return largest;
  }

  console.log(
    longest(
      "Hello guys this is geeksforgeeks where" + " students learn programming",
    ),
  );
}

// Approach 2: Using the split() and sort() method

{
  function longest(str) {
    str = str.split(" ");
    return str.sort((a, b) => b.length - a.length)[0];
  }

  console.log(
    longest("Hello guys this is geekforgeeks" + " Where students learn"),
  );
}
