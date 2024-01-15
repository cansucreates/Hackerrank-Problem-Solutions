// iterate the array
// again we iterating from the current point
// we initialize the current segmentSum and segmentLength
// if segmentlength matches with the m
// if segmentSum matches with the d
// count++
// return count

function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let segmentSum = 0;
    let segmentLength = 0;
    for (let j = i; j < s.length; j++) {
      segmentSum += s[j];
      segmentLength++;
      if (segmentLength === m) {
        if (segmentSum === d) {
          count++;
        }
      }
    }
  }
  return count;
}
