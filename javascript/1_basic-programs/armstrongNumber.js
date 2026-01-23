// Check for Armstrong Numbers
// An Armstrong Number is an n-digit number that is the sum of the nth power of its all digits. For instance, Consider a 3-digit number, i.e., 153, which is a 3-digit number, & the sum of the cube of all its digits will be the number itself, i.e. 153.

/* 
13 = 1
53 = 5*5*5 = 125
33 = 3*3*3 = 27
13 + 53 + 33 = 1+125+27 = 153  
*/

//using to string and split method

function isArmStrong(number) {
  const digits = number.toString().split("");
  const order = digits.length;

  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), order),
    0,
  );
  if (sum === number) {
    return `${number} is an Armstrong number`;
  } else {
    return `${number} is not an Armstrong number`;
  }
}

console.log(isArmStrong(153));
console.log(isArmStrong(123));
console.log(isArmStrong(9474));

// using basic method


function isArmstrong(number) {
    let temp = number;
    let o = order(temp)
    let sum = 0;

    // Loop until temp is greater than 0
    while (temp) {
        remainder = temp % 10;

        // Floor value of the quotient
        temp = Math.floor(temp / 10);
        sum = sum + Math.pow(remainder, o);
    }
    if (sum === number) {
        console.log(number + " is an Armstrong Number");
    }
    else {
        console.log(number + " is Not an Armstrong Number");
    }
}

// Function to calculate number of digits
function order(number) {
    let n = 0;
    while (number > 0) {
        n++;
        number = Math.floor(number / 10);
    }
    return n;
}

// Input value 153
isArmstrong(153);

// Input value 520
isArmstrong(520);



// using array reduce

function isArmstrongUsingReduce(number){
    const numStr = number.toString();
    const numDigits = numStr.length;
    const sum = [...numStr].reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);
    return sum === number;
}

console.log(isArmstrongUsingReduce(153))
console.log(isArmstrongUsingReduce(152))