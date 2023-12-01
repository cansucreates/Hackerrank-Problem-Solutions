/*Given five positive integers, find the minimum and maximum values that can be calculated by summing 
 exactly four of the five integers. Then print the respective minimum and maximum values as a single 
 line of two space-separated long integers.*/

// Solution:

function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;
  // sorting array in ascending order
  arr.sort((a, b) => a - b);

  // sum of the first four smallest numbers
  for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
  }

  // sum of the last largest numbers
  for (let i = arr.length - 1; i >= arr.length - 4; i--) {
    maxSum += arr[i];
  }
  console.log(minSum, maxSum);
}
