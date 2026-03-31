function minPlatforms(arr, dep) {
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let platforms = 0;
  let maxPlatforms = 0;
  let i = 0, j = 0;

  while (i < arr.length) {
    if (arr[i] <= dep[j]) {
      platforms++;
      maxPlatforms = Math.max(maxPlatforms, platforms);
      i++;
    } else {
      platforms--;
      j++;
    }
  }
  return maxPlatforms;
}
