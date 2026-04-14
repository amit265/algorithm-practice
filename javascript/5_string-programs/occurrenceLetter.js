// 17. Get Number of Occurrences of Each Letter

// [Method 1]: Using Object

{
  function freqCount(s) {
    const freq = {};
    for (let x of s) {
      freq[x] = (freq[x] || 0) + 1;
    }
    return freq;
  }

  console.log(freqCount("amitkumar"));
}

// [Method 2]: Using Map

{
  function freqCount(s) {
    const m = new Map();
    for (let x of s) {
      m.set(x, (m.get(x) || 0) + 1);
    }

    return m;
  }

  console.log(freqCount("amit"));
}

// [Method 3]: Using Regular Expression

{
  function freqCount(s) {
    return (s.match(/[a-z]/gi) || []).reduce((freq, x) => {
      freq[x] = (freq[x] || 0) + 1;
      return freq;
    }, {});
  }

  console.log(freqCount("amitamit"));
}
