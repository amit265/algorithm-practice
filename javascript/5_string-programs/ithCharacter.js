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

// Approach 2

/* 

In this approach, we calculate the ith character in a binary string after n iterations.
It converts a decimal number M into its binary representation, finds the block number where the character is, and handles special cases when k corresponds to the root digit.
We use bitwise operations to efficiently determine whether to flip the root digit or not.
The result is then printed, providing the desired character within the modified binary string.
*/

{
  function KthCharacter(m, n, k) {
    let distance = Math.pow(2, n);
    let Block_number = Math.floor(k / distance);
    let remaining = k % distance;
    let s = new Array(32).fill(0);
    let x = 0;

    while (m > 0) {
      s[x] = m % 2;
      m = Math.floor(m / 2);
      x++;
    }

    let root = s[x - 1 - Block_number];
    if (remaining == 0) {
      console.log(root);
      return;
    }

    let flip = true;
    while (remaining > 1) {
      if ((remaining & 1) > 0) {
        flip = !flip;
      }

      remaining = remaining >> 1;
    }

    if (flip) {
      console.log(root > 0 ? 0 : 1);
    } else {
      console.log(root);
    }
  }

  let m = 5,
    k = 5,
    n = 3;

  KthCharacter(m, n, k);
}



