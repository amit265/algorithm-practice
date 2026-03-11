// JavaScript - Check If a String Contains any Whitespace Characters

// 1. Using Regular Expressions

{
  const s = "Hello world";
  const hasSpace = /\s/.test(s);
  console.log(hasSpace);
}

// 2. Using String.prototype.includes() Method

{
  const s = "Helloworld";
  const hasSpace = s.includes(" ");
  console.log(hasSpace);
}

// 3. Using String.prototype.match() Method

{
  const s = "Hello world";
  const hasSpace = s.match(/\s/) !== null;
  console.log(hasSpace);
}

// 4. Using String.prototype.search() Method

{
  const s = "Hello world";
  const hasSpace = s.search(/\s/) !== -1;
  console.log(hasSpace);
}

// 5. Using a for Loop

{
  const s = "HelloWorld";
  let hasSpace = false;
  for (const char of s) {
    if (/\s/.test(char)) {
      hasSpace = true;
      break;
    }
  }
  console.log(hasSpace);
}

// 6. Using Array.prototype.some() Method

{
  const s = "Hello World";
  const hasSpace = [...s].some((char) => /\s/.test(char));
  console.log(hasSpace);
}

// 7. Using Array.prototype.filter() Method

{
  const s = "HelloWorld";
  const hasSpace = s.split("").filter((char) => /\s/.test(char)).length > 0;
  console.log(hasSpace);
}


// Using javascript sets 

{
    const s = "Hello world";
    const set = new Set([" ", "\t", "\n", "\r"]);
    const hasSpace = [...s].some((char) => set.has(char));
    console.log(hasSpace)
}