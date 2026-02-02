// 19. Merge Two Arrays and Remove Duplicate Items

//1. Using Spread Operator and Set() Constructor

{
  let a1 = [10, 20, 30, 40];
  let a2 = [30, 40, 50, 70];
  let s = new Set([...a1, ...a2]);
  let a = [...s];
  console.log(a);
}

//2. Using concat() Method and Set() Object

{
  let a1 = [10, 20, 30, 40];
  let a2 = [30, 40, 50, 60];

  let s = new Set(a1.concat(a2));

  let a = [...s];
  console.log(a);
}

// Using for Loop and indexOf() Method

{
  let a1 = [10, 20, 30, 40];
  let a2 = [30, 40, 50, 60];

  let a = [...a1];

  for (let i = 0; i < a2.length; i++) {
    if (a.indexOf(a2[i]) === -1) {
      a.push(a2[i]);
    }
  }

  console.log("merged array: ", a);
}

//Using JavaScript Map

{
  let a1 = [10, 20, 30, 40, 50];
  let a2 = [20, 30, 40, 50, 60];

  let map = new Map();

  a1.forEach((elm) => {
    map.set(elm, true);
  });

  a2.forEach((elm) => {
    map.set(elm, true);
  });

  let a = Array.from(map.keys());

  console.log("using map", a);
}
