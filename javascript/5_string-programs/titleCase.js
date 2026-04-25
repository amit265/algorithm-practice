// 28. Convert String to Title Case

// 1. Using for Loop

const s = "my name is amit";

{
  function titleCase(s) {
    return s
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  console.log(titleCase(s));
}

// 2. Using replace() Method

{
  function titleCase(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  console.log(titleCase(s));
}

// 3. Using map() Method

{
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
  console.log(titleCase("converting string to titlecase"));
}

// 4. Using reduce() method

{
  function titleCase(st) {
    return st
      .toLowerCase()
      .split(" ")
      .reduce(
        (s, c) => s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "),
        "",
      );
  }
  console.log(titleCase("converting string to titlecase"));
}

// 5. Using forEach Loop

{
  const str = "geeks for geeks";
  let titleCase = "";
  str.split(" ").forEach((word) => {
    const capitalizedWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
  });
  console.log(titleCase);
}

// 6. Using Regular Expressions

{
  function titleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase();
    });
  }

  console.log(titleCase("converting string to titlecase"));
}

// 7. Using toLocaleLowerCase() and replace() with a Callback Function

{
  function toTitleCase(str) {
    return str.toLocaleLowerCase().replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  let sentence = "welcome to geeks for geeks";
  console.log(toTitleCase(sentence));
}
