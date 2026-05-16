// 37. Extract Email Addresses from a String

// Using Regular Expressions

{
  function extract(str) {
    const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return str.match(email);
  }

  const str = "My email address is amit@gmail.com";
  console.log(extract(str));
}
