// 19. Make First Letter of a String Uppercase

// 1. Using charAt() with slice() Method (Most Common)

{
  const s1 = "javascript sdsd";
  const s2 = s1.charAt(0).toUpperCase() + s1.slice(1);
  console.log(s2);
}

// 2. Using JavaScript replace() Method 

{
  const s1 = "javscript";
  const s2 = s1.replace(/^./, (char) => char.toUpperCase());
  console.log(s2);
}

// 3. Using Template Literals and slice() Method 

{
  const s1 = "javascript";
  const s2 = `${s1.charAt(0).toUpperCase()}${s1.slice(1)}`;

  console.log(s2);
}
