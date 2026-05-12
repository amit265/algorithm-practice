// 33. Get Nth Occurrence of a String

// Approach 1: Using split() and join() methods

{
  // Input string
  let string = "Geeks gfg Geeks Geek Geeks gfg";

  // String to search
  let searchString = "Geeks";

  // occurrence number
  let occurrence = 3;
  console.log(
    occurrence +
      "rd occurrence of a '" +
      searchString +
      "' in " +
      string +
      "'.",
  );

  // Function to get index of occurrence
  function getPos(str, subStr, i) {
    return str.split(subStr, i).join(subStr).length;
  }

  function GFG_Fun() {
    console.log(getPos(string, searchString, occurrence));
  }

  GFG_Fun();
}

// Approach 2: Using indexOf() method

{
  // Input string
  let string = "Geeks gfg Geeks Geek Geeks gfg";

  // String to search
  let searchString = "Geeks";

  // occurrence number
  let occurrence = 3;
  console.log(
    occurrence +
      "rd occurrence of a '" +
      searchString +
      "' in " +
      string +
      "'.",
  );

  // Function to get index of occurrence
  function getIndex(str, substr, ind) {
    let Len = str.length,
      i = -1;
    while (ind-- && i++ < Len) {
      i = str.indexOf(substr, i);
      if (i < 0) break;
    }
    return i;
  }

  function GFG_Fun() {
    console.log(getIndex(string, searchString, occurrence));
  }

  GFG_Fun();
}

// Approach 3: Using regular expressions

{
  // Input string
  let string = "Geeks gfg Geeks Geek Geeks gfg";

  // String to search
  let searchString = "Geeks";

  // occurrence number
  let occurrence = 3;

  // Create a regular expression with global flag to find all occurrences
  let regex = new RegExp(searchString, "g");
  let matches = Array.from(string.matchAll(regex));

  // Check if nth occurrence exists
  if (matches.length >= occurrence) {
    let nthIndex = matches[occurrence - 1].index;
    console.log(
      occurrence +
        "rd occurrence of a '" +
        searchString +
        "' in " +
        string +
        "'.",
    );
    console.log("Index of the " + occurrence + "rd occurrence: " + nthIndex);
  } else {
    console.log(
      "The string does not have " +
        occurrence +
        " occurrences of '" +
        searchString +
        "'.",
    );
  }
}

// Approach 4: Using lastIndexOf() Method in a Loop

{
  // Input string
  let string = "Geeks gfg Geeks Geek Geeks gfg";

  // String to search
  let searchString = "Geeks";

  // occurrence number
  let occurrence = 3;
  console.log(
    occurrence +
      "rd occurrence of a '" +
      searchString +
      "' in " +
      string +
      "'.",
  );

  // Function to get index of occurrence
  function getLastIndex(str, substr, occ) {
    let index = str.length;
    while (occ-- > 0 && index >= 0) {
      index = str.lastIndexOf(substr, index - 1);
    }
    return index;
  }

  function GFG_Fun() {
    console.log(getLastIndex(string, searchString, occurrence));
  }

  GFG_Fun();
}

// Approach 5: Using a Loop and substr()

{
  function getNthOccurrence(string, substring, n) {
    let count = 0;
    let position = 0;

    while (count < n) {
      position = string.indexOf(substring, position);

      if (position === -1) {
        return -1;
      }

      count++;
      position++;
    }

    return position - 1;
  }

  const str = "the quick brown fox jumps over the lazy dog. the dog barks.";
  const subStr = "the";
  const nth = 2;

  const result = getNthOccurrence(str, subStr, nth);
  console.log(result);
}
