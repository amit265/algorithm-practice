// 7. Insert an Item into an Array at Specific Index

function insert(arr) {
  arr.splice(0, 1, 4);
  return arr;
}

console.log(insert([2, 4, 6, 8]));

function insertUsingConcat() {
  let a = [10, 20, 30, 40, 50];
  let i = 2;
  let a1 = [99, 100, 101];

  let a2 = a.slice(0, i).concat(a1, a.slice(i));

  console.log(a2);
}

insertUsingConcat();

function insertUsingSpreadAndSlice() {
  let a = [10, 20, 30, 40, 50];

  const i = 2;

  const a1 = [99, 100, 101];

  a = [...a.slice(0, i), ...a1, ...a.slice(i)];

  console.log(a);
}
insertUsingSpreadAndSlice();

function insertUsingArrayFrom() {
  let a = [10, 20, 30, 40, 50];
  let a1 = [99, 100, 101];
  let index = 1;

  let a2 = Array.from({ length: a.length + a1.length }, (_, i) =>
    i < index ? a[i] : i < index + a1.length ? a1[i - index] : a[i - a1.length],
  );

  console.log(a2);
}

insertUsingArrayFrom();

function insertUsingReduce() {
  const a = [1, 2, 3, 4, 5];
  const index = 2;
  const a1 = [99, 100, 101];

  const a2 = a.reduce((acc, curr, i) => {
    if (i === index) acc.push(...a1);
    acc.push(curr);
    return acc;
  }, []);

  console.log(a2);
}

insertUsingReduce();
