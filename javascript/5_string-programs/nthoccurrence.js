// 33. Get Nth Occurrence of a String

// 33. Get Nth Occurrence of a String

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
