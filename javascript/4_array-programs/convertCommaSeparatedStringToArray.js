// JavaScript - 28. Convert Comma Separated String to Array

// 1. Using the split() Method (Most Common)

{
  const s = "apple,banana,cherry";
  const a = s.split(",");
  console.log(a);
}

// 2. Using Array.prototype.reduce() Method

{
  const s = "apple,banana,cherry";
  const a = s.split("").reduce(
    (obj, char) => {
      if (char === ",") {
        obj.push("");
      } else {
        obj[obj.length - 1] += char;
      }
      return obj;
    },
    [""],
  );

  console.log(a);
}

// 3. Using Loops and slice() Method

{
  const s = "apple,banana,cherry";
  const a = [];
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ",") {
      a.push(s.slice(start, i));
      start = i + 1;
    }
  }
  a.push(s.slice(start));
  console.log(a);
}

// 4. Using Regular Expressions (RegExp) and match() Method

{
  const s = "apple , banana , cherry ";
  const a = s.match(/[^,\s]+/g);
  console.log(a);
}

// Handling Edge Cases

// Case 1: Trailing Commas

{
  const s = "apple,banana,cherry,";
  const a = s.split(",").filter((item) => item !== "");
  console.log(a);
}

// Case 2: ExtraSpaces

{
  const s = " apple , banana , cherry ";
  const a = s.split(",").map((item) => item.trim());
  console.log(a);
}
