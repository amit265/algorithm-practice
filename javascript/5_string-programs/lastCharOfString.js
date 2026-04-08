// 10. Get the Last Character of a String

// 1. Using charAt() Method (Most Common)

{
  const s = "javascript";
  const lchar = s.charAt(s.length - 1);
  console.log(lchar);
}

// 2. Using slice() Method

{
  const s = "Javascript";
  const lchar = s.slice(-1);
  console.log(lchar);
}

// 3. Using substr() Method

{
  const s = "Javascript";
  const lchar = s.substr(s.length - 1, 1);
  console.log(lchar);
}

// 4. Using String Length for Index

{
  const s = "Javascript";
  const lchar = s[s.length - 1];
  console.log(lchar);
}

// 5. Using String.at() Method

{
  const s = "Javascript";
  const lchar = s.at(-1);
  console.log(lchar);
}

// 6. Using match() Method with Regular Expressions

{
  const s = "Javascript";
  const lchar = s.match(/.$/)[0];
  console.log(lchar);
}

//7. Using Array.prototype.pop() Method

{
  const s = "Javascript";
  const lchar = s.split("").pop();
  console.log(lchar);
}
