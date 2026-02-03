// 25. Select a Random Element from Array

// 1. Using Math.random() Method

{
  let a = [10, 20, 30, 40, 50];
  let i = Math.floor(Math.random() * a.length);
  let r = a[i];
  console.log(r);
}

// 2. Using Fisher-Yates Shuffle Algorithm

{
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  let a = [10, 20, 30, 40, 50];

  shuffle(a);

  console.log(shuffle(a));
  let r = a[0];
  console.log(r);
}

// 3. Using Array.prototype.sort()

{
  let colors = ["red", "green", "blue", "yellow"];
  let random = colors.sort(() => 0.5 - Math.random())[0];

  console.log(random);
}
