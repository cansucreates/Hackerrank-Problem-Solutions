// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.

// Solution:

function birthdayCakeCandles(candles) {
  let max = 0; // height of the tallest candle
  let count = 0; // number of candles that are tallest
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
      count = 1; // first candle that is tallest
    } else if (candles[i] === max) {
      count++; // found 1 more tallest candle
    }
  }
  return count;
}
