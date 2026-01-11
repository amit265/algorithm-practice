function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
  for(let a = 1; a < n; a++) {
    for(let b = a + 1; b < n; b++){
      const c = n - a - b;
      if(a*a + b*b === c*c) {
        sumOfabc = a * b *c;
      }
    }
  }

 return sumOfabc;
}

console.log(specialPythagoreanTriplet(1000))