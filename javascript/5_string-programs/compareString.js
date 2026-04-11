// 13. Compare Strings

// compares the 2 strings using localeCompare() method and returns 0, -1, or 1. This method does case-sensitive comparisons.

{
  let str1 = "GFG";
  let str2 = "GeeksforGeeks";

  let ans = str1.localeCompare(str2);
  let res = "";

  if (ans == -1) {
    res = '"' + str1 + '" comes before "' + str2 + '"';
  } else if (ans === 0) {
    res = "Both string are same";
  } else {
    res = '"' + str1 + '" comes after "' + str2 + '"';
  }

  console.log(res);
}

// compares the 2 strings by writing a condition that returns 0, -1, or 1 depending on the comparison. This method also does case-sensitive comparisons.

{
  let str1 = "Geeks";
  let str2 = "GFG";

  let ans = str1 < str2 ? -1 : str1 > str2 ? 1 : 0;
  let res = "";

  if (ans == -1) {
    res = '"' + str1 + '" comes before "' + str2 + '"';
  } else if (ans === 0) {
    res = "Both string are same";
  } else {
    res = '"' + str1 + '" comes after "' + str2 + '"';
  }

  console.log(res);
}

// compares the 2 same strings (case-sensitive also) by using the localeCompare() method.

{
  let str1 = "GeeksforGeeks";
  let str2 = "GeeksforGeeks";

  let ans = str1.localeCompare(str2);
  let res = "";

  if (ans == -1) {
    res = '"' + str1 + '" comes before "' + str2 + '"';
  } else if (ans == 0) {
    res = "Both string are same";
  } else {
    res = '"' + str1 + '" comes after "' + str2 + '"';
  }

  console.log(res);
}
