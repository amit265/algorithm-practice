// 16. Check if String is Palindrome

// Method 1: Naive Approach

{
  function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
      let x = str[i];
      let y = str[j - i];

      if (x != y) {
        return false;
      }
    }
    return true;
  }

  function isPalindrome(str) {
    let ans = check_palindrome(str);

    if (ans == true) console.log(str + " is a palindrome");
    else console.log(str + " not palindrome");
  }

  let test = "abaaba";
  isPalindrome(test);

  console.log(check_palindrome("jalaj"));
}

// Method 2: Reversing the string

{
  function reverse(str) {
    let rev_str = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rev_str += str[i];
    }

    return rev_str;
  }

  function isPalindrome(str) {
    reverse_str = reverse(str);

    if (reverse_str === str) {
      console.log("passed string is palindrome");
    } else {
      console.log("passed string is not palindrome");
    }
  }

  let test = "hellolleh";
  isPalindrome(test);
}

// Method 3: Using the split(), reverse(), and join() Methods

{
  let check_palindrome = (str) => str === str.split("").reverse().join("");
  console.log(check_palindrome("hellolleh"));
}

// Method 4: Using Array.every()

{
  function isPalindrome(str) {
    return str
      .split("")
      .every((char, index) => char === str[str.length - index - 1]);
  }

  console.log(isPalindrome("radar"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("level"));
}

//  Method 5: Using Two Pointers

{
  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;

      left++;
      right--;
    }

    return true;
  }

  console.log(isPalindrome("madam"));
  console.log(isPalindrome("test"));
  console.log(isPalindrome("abba"));
}
