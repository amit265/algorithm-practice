function longestCollatzSequence(limit) {

    const cache = {};
    cache[1] = 1;
    let maxLength = 0;
    let result = 1;

    for(let i = 2; i < limit; i++) {
      let n = i;
      let steps = 0;

        while(n !== 1 && !cache[n]){
          steps++;
          n = (n % 2 === 0) ? n/2 : 3 * n + 1;
        }

        cache[i] = steps + cache[n];

        if(cache[i] > maxLength) {
          maxLength = cache[i];
          result = i;
        }
    }

  return result;
}


console.log(longestCollatzSequence(1000000));
