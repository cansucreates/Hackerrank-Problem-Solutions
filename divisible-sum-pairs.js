function divisibleSumPairs(n, k, ar) {
  // iterate through array
  // start from i+1 , and iterate through
  // check if the sums % k === 0;
  // if it is count++;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}
