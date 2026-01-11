function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
  for(let a = 1; a < 333; a++) {
    for(let b = a + 1; b < 500; b++){
      const c = 1000 - a - b;
      if(a*a + b*b === c*c) {
        sumOfabc = a * b *c;
      }
    }
  }

 return sumOfabc;
}

console.log(specialPythagoreanTriplet(1000))