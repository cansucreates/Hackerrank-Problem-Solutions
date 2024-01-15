function getTotalX(a, b) {
  let count = 0;
  // to find the range:
  // array a elements needs to be all factors of considered num
  let maxA = Math.max(...a);
  // the considered num needs to be the factor of all elements of array b
  let minB = Math.min(...b);

  // iterate through between them
  for (let i = maxA; i <= minB; i++) {
    // 1: i is a factor of all elements in b
    const isFactorOfB = b.every((element) => element % i === 0);
    //2: all elements in a are factors of i
    const isFactorOfI = a.every((element) => i % element === 0);

    // if both of them is true then ++ the counter.
    if (isFactorOfB && isFactorOfI) {
      count++;
    }
  }

  return count;
}
