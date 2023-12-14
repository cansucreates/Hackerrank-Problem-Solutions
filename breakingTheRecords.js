// pseudo code.
//create countMax, countMin.
// iterate through score array
// for second index. check if it is higher than previous
// number. if it is higher add it to currentMax.
// and countMax ++;
// if its not high, check if it is less than previous number.
// if its less than previous number add it to currentMin.
// and countMin++;

// let count = [countMax, countMin];
// return count;

// Function to calculate the number of times the highest and lowest scores are broken
function breakingRecords(scores) {
  let countMax = 0; // Counter for the number of times the highest score is broken
  let countMin = 0; // Counter for the number of times the lowest score is broken
  let currentMin = scores[0]; // Initialize the current minimum score with the first element of the array
  let currentMax = scores[0]; // Initialize the current maximum score with the first element of the array

  for (let i = 0; i < scores.length - 1; i++) {
    if (scores[i + 1] > currentMax) {
      // If the next score is higher than the current maximum score
      currentMax = scores[i + 1]; // Update the current maximum score
      countMax++; // Increment the counter for the number of times the highest score is broken
    }
    if (scores[i + 1] < currentMin) {
      // If the next score is lower than the current minimum score
      currentMin = scores[i + 1]; // Update the current minimum score
      countMin++; // Increment the counter for the number of times the lowest score is broken
    }
  }
  let counter = [countMax, countMin]; // Create an array with the count of maximum and minimum score breaks
  return counter; // Return the array
}
