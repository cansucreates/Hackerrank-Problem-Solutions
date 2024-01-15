// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree

// pseudocode
// 1. count the number of apples
//    - if the apple falls on Sam's house, add 1
// 2. count the number of oranges
//    - if the orange falls on Sam's house, add 1
// 3. return the number of apples and oranges that fall on Sam's house

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApples = 0;
  let countOranges = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      countApples++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      countOranges++;
    }
  }
  console.log(countApples);
  console.log(countOranges);
}
