// reverse a string -> "hello" ----> "olleh"

// input ---> ["h", "e", "l", "l", "o"]
// output --> ["o", "l", "l", "e", "h"]

// two pointer strategy

// left = 0; right = string.length - 1

function reverseString(s) {
  let arr = s.split("");
  console.log(s);
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}
console.log(reverseString("hello"));
