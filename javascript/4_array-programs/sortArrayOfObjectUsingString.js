// 20. Sort Array of Objects by String Property Value

// 1. Using localeCompare() Method – Most Used

const a = [
  { s: "banana", price: 8 },
  { s: "apple", price: 10 },
  { s: "orange", price: 12 },
];
// a.sort((x, y) => x.price - y.price);

a.sort((x, y) => x.s.localeCompare(y.s));

console.log(a);

// 2. Using < and > Operators for Direct Comparison

{
  const a = [
    { s: "banana", price: 8 },
    { s: "apple", price: 10 },
    { s: "orange", price: 12 },
  ];

  a.sort((x, y) => {
    if (x.s < y.s) return -1;
    if (x.s > y.s) return 1;
    return 0;
  });
  console.log(a);
}

{
  // 3. Using Chained Comparison for Sorting by Multiple Properties

  const a = [
    { s: "apple", price: 10 },
    { s: "banana", price: 12 },
    { s: "apple", price: 18 },
  ];

  a.sort((x, y) => x.s.localeCompare(y.s) || x.price - y.price);
  console.log(a);
}

//4. Using Intl.Collator for Enhanced Locale-Aware Sorting

{
  const a = [
    { s: "banana", price: 8 },
    { s: "apple", price: 10 },
    { s: "orange", price: 12 },
  ];

  const collator = new Intl.Collator("en", { sensitivity: "base" });
  a.sort((x, y) => collator.compare(x.s, y.s));
  console.log(a);
}
