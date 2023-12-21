// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

//pseudo:
// create color map
// keys are colors, values are the count of frequency
// iterate through the array
// -add each color to the colors object
//   -if color does not exist in colors
//     - colors[color] = 1;
//   -if color does exist
//     - colors[color]++;

// we have colors and  their count

// check the matching pairs
// and count
// last return the count of pairs.

function sockMerchant(n, ar) {
  let pairs = 0;
  let colors = {};

  for (let i = 0; i < n - 1; i++) {
    let color = ar[i];
    if (!colors[color]) {
      colors[color] = 1;
    } else {
      colors[color]++;
    }
  }

  for (let color in colors) {
    pairs += Math.floor(colors[color] / 2);
  }

  return pairs;
}
