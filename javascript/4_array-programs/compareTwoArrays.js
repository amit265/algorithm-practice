// 24. Compare Two Arrays

// 1. Using the JSON.stringify() Method

{
  let a1 = [1, 2, 3, 5];
  let a2 = [1, 2, 3, 5];

  if (JSON.stringify(a1) == JSON.stringify(a2)) console.log("True");
  else console.log("False");
}

// 2. Using JavaScript for Loop

{
  let a = [1, 2, 3, 5];
  let b = [1, 2, 3, 5];

  if (a.length != b.length) console.log(false);
  else {
    //comparing each element of array

    for (let i = 0; i < a.length; i++)
      if (a[i] != b[i]) return console.log(false);

    console.log("true");
  }
}

//3. String Comparison

{
  let c = [1, 2, 3, 5];
  let d = [1, 2, 3, 5];
  console.log("amit");
  console.log(c.join());
  let res = c.join() === d.join();

  console.log(res);
}

// 4. Using Array every() Method

{
  const compareFunc = (a, b) =>
    a.length === b.length && a.every((elm, index) => elm === b[index]);

  let a = [1, 2, 3, 5];
  let b = [1, 2, 3, 5];

  console.log(compareFunc(a, b));
}

// 6. Using Set
{
  function compareArrays(a1, a2) {
    const s1 = new Set(a1);
    const s2 = new Set(a2);

    if (s1.size !== s2.size) {
      return false;
    }

    for (const item of s1) {
      if (!s2.has(item)) {
        return false;
      }
    }

    return true;
  }

  const a1 = [1, 2, 3, 4];
  const a2 = [4, 3, 2, 7];

  console.log("compare two arrays : ", compareArrays(a1, a2));
}

// 7. Using reduce and some Methods

{
  function arraysEqual(a1, a2) {
    if (a1.length !== a2.length) return false;

    let countElements = (arr) =>
      arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});

    let c1 = countElements(a1);
    let c2 = countElements(a2);

    return !Object.keys(c1).some((key) => c1[key] !== c2[key]);
  }

  let a1 = [1, 2, 3, 4];
  let a2 = [4, 3, 2, 1];
  let a3 = [1, 2, 3, 5];

  console.log(arraysEqual(a1, a2));
  console.log(arraysEqual(a1, a3));
}

// 8. Using Array.prototype.sort() Method

{
  function arraysEqual(a1, a2) {
    if (a1.length !== a2.length) return false;

    let s1 = a1.slice().sort();
    let s2 = a2.slice().sort();


    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) return false;
    }

    return true;
  }

  let a1 = [3, 1, 2];
  let a2 = [2, 3, 1];

  console.log(arraysEqual(a1, a2));
}
