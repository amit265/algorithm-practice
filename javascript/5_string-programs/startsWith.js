// 5. Check if a String Starts With Another String

// 1. Using String.startsWith() Method 

{
  let s = "Hello WOrld";
  let pre = "Hello";
  if (s.startsWith(pre)) {
    console.log(`The string starts with '${pre}'`);
  } else {
    console.log(`The string does not starts with '${pre}'`);
  }
}

// 2. Using String.slice() Method

{
  let s = "Hello world";
  let prefix = "Hello";
  if (s.slice(0, prefix.length) === prefix) {
    console.log(`The string starts with '${prefix}'`);
  } else {
    console.log(`The string does not start with '${prefix}'`);
  }
}

// 3. Using String.indexOf() Method

{
  let s = "Hello World";
  let prefix = "Hello";
  if (s.indexOf(prefix) === 0) {
    console.log(`The string starts with "${prefix}"`);
  } else {
    console.log(`The string does not start with '${prefix}'`);
  }
}

// 4. Using String.substr() Method

{
  let s = "Hello World";
  let prefix = "Hello";
  if (s.substr(0, prefix.length) === prefix) {
    console.log(`The string starts with "${prefix}"`);
  } else {
    console.log(`The string does not start with '${prefix}'`);
  }
}
