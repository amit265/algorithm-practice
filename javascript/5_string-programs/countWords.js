// 1. Count Words of a String

// 1. Using split() Method 

{
  const count = (s) => s.trim().split(/\s+/).length;

  const s = "Hello, this is a simple test";
  console.log(count(s)); 
}
