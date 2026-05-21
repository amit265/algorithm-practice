// 39. Find i’th Index Character in Binary String After n Iterations

// Approach 1

/* 
Convert a decimal number into its binary representation and store it as a string 's'.
Iterate 'n' times, and in each iteration, replace '0' with "01" and '1' with "10" in the string 's' by running another loop over its length, storing the modified string in 's1' after each iteration.
After all, iterations, return the character at the 'ith' index in the final string 's'.

*/

{
  let s = "";
  function binary_conversion(m) {
    while (m !== 0) {
      let tmp = m % 2;
      s += tmp.toString();
      m = Math.floor(m / 2);
    }

    s = s.split("").reverse().join("");
  }

  function find_character(n, m, i) {
    binary_conversion(m);
    let s1 = "";
    for (let x = 0; x < n; x++) {
      let temp = "";
      for (let y = 0; y < s.length; y++) {
        temp += s[y] === "1" ? "10" : "01";
      }

      s = temp;
    }

    return s[i] === "1" ? 1 : 0;
  }

  let m = 5,
    n = 2,
    i = 8;
  console.log(find_character(n, m, i));
}
