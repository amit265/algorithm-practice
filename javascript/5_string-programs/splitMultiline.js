// 31. Split Multiline String into Array of Lines

{
  function myFunction() {
    let string = "Are you ready?" + "<br>So let's get started";
    return string.split("<br>");
  }

  console.log(myFunction());
}

{
  function myFunction() {
    let string = "Are you ready?" + "<br>So let's get started";
    return string.split("<br>")[1];
  }

  console.log(myFunction());
}
