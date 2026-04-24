// 27. Convert Comma Separated String To Array

// 1. Using the split() Method (Most Common)
const s = "apple, banana, cherry";

{
  const a = s.split(",");
  console.log(a);
}

// 2. Using Array.prototype.reduce() Method

{
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
