// 21. Create Two Dimensional Array

// 1. Using Array Literal Notation - Most used

let mat = [
  [10, 20, 30],
  [40, 50, 60],
  [20, 50, 70],
];

console.log(mat);

// 2. Using Array.from() Method

{
  const rows = 4;
  const cols = 5;

  const mat = Array.from({ length: rows }, () => new Array(cols).fill(0));

  console.log(mat);
}

// 3. Using Nested For Loop

{
  let mat = [];
  let rows = 6;
  let cols = 4;
  let val = 0;

  for (let i = 0; i < rows; i++) {
    mat[i] = [];
    for (let j = 0; j < cols; j++) {
      mat[i][j] = val++;
    }
  }

  console.log(mat);
}

// 4. Using Array.fill() Method

{
  const rows = 6;
  const cols = 6;

  const mat = Array(rows)
    .fill()
    .map((_, index) => Array(cols).fill(index));

  console.log(mat);
}
