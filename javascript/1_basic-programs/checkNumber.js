// Check if a Number is Positive, Negative, or Zero

// #1 using switch

function numberChecking(num) {
  console.log(Math.sign(num));
  switch (Math.sign(num)) {
    case 1:
      console.log("The number is positive");
      break;
    case -1:
      console.log("The number is negative");
      break;
    default:
      console.log("The number is zero");
  }
}

numberChecking(12);
numberChecking(-2);
numberChecking(0);

// #2 using if/else

function checkNum(number) {
  if (number > 0) return "the number is posititve";
  if (number < 0) return "the number is negative";
  return "the number is zero";
}

console.log(checkNum(12));

console.log(checkNum(-12));

console.log(checkNum(0));

// #3 using ternary

function checkNumberSign(number) {
  if (isNaN(number)) return "Invalid input. Please enter a valid number.";
  return number > 0
    ? "number is positive"
    : number < 0
      ? "number is negative"
      : "number is zero";
}

console.log(checkNumberSign(13));
console.log(checkNumberSign(0));
console.log(checkNumberSign(-132));

//4 using Math.abs()

// Math.abs() , it returns the absolute number so compare with number if its true, then its positive otherwise its negative
