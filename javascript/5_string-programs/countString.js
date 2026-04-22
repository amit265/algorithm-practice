// 22. Count String Occurrence in String

// 1. Using match() Method (Common Approach)

{
  const s1 = "hello world, hello javascript";
  const s2 = "hello";
  const count = (s1.match(new RegExp(s2, "g")) || []).length;
  console.log(count);
}

//2. Using while Loop

{
  const s1 = "hello world, hello JavaScript!";
  const s2 = "hello";
  let count = 0;
  let pos = 0;
  while ((pos = s1.indexOf(s2, pos)) !== -1) {
    count++;
    pos += s2.length;
  }

  console.log(count);
}

// 3. Using split() Function

{
  const s1 = "hello world, hello javascript";
  const s2 = "hello";
  const count = s1.split(s2).length - 1;
  console.log(count);
}

// 4. Using indexOf() in a Loop

{
  const s1 = "hello world, hello javascript";
  const s2 = "hello";
  let count = 0;
  let pos = s1.indexOf(s2);

  while (pos !== -1) {
    count++;

    pos = s1.indexOf(s2, pos + s2.length);
  }

  console.log(count);
}

// 5. Using Regular Expressions

{
  const s1 = "hello world, hellow JavaScript";
  const s2 = "hello";
  const regex = new RegExp(s2, "g");
  const count = (s1.match(regex) || []).length;
  console.log(count);
}

// 6. Using reduce() Method

{
  const s1 = "hello world, hello JavaScript";
  const s2 = "hello";
  const count = s1
    .split(" ")
    .reduce((acc, curr) => (curr === s2 ? acc + 1 : acc), 0);
  console.log(count);
}

// 7. Using includes() and slice() Methods

{
  const s1 = "hello world, hellow JavaScript";
  const s2 = "hello";
  let count = 0;
  let temp = s1;

  while (temp.includes(s2)) {
    count++;
    temp = temp.slice(temp.indexOf(s2) + s2.length);
  }

  console.log(count);
}
