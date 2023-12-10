/**
 * Determines if two kangaroos will meet at the same position after making jumps.
 * @param {number} x1 - The starting position of the first kangaroo.
 * @param {number} v1 - The jump distance of the first kangaroo.
 * @param {number} x2 - The starting position of the second kangaroo.
 * @param {number} v2 - The jump distance of the second kangaroo.
 * @returns {string} - Returns "YES" if the kangaroos will meet, "NO" otherwise.
 */
function kangaroo(x1, v1, x2, v2) {
  let kangOnePosition = x1;
  let kangTwoPosition = x2;

  while (kangOnePosition !== kangTwoPosition) {
    kangOnePosition += v1;
    kangTwoPosition += v2;

    if (kangOnePosition > kangTwoPosition && v1 >= v2) {
      return "NO";
    }

    if (kangTwoPosition > kangOnePosition && v2 >= v1) {
      return "NO";
    }
  }

  return "YES";
}
