// 6. Print Multiplication Table of a Number

function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
console.log(table(12));

// using recursion

function print_table(n, i = 1) {
  if (i == 11)
    // Base case
    return;
  console.log(n + " * " + i + " = " + n * i);
  i++; // Increment i
  print_table(n, i);
}

// Driver Code
let n = 5;
print_table(n);

//using array

function printTable(num) {
  Array.from({ length: 10 }, (_, i) =>
    console.log(`${num} * ${i + 1} = ${num * (i + 1)}`),
  );
}

printTable(19);
