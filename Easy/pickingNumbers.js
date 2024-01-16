// Given an array of integers, find the longest subarray where the absolute 
// difference between any two elements is less than or equal to 1.

// pseudocode:
// 1. sort the array ( in ascending order )
// 2. iterate through the array
// 3. check the difference between the current number and the next number

function pickingNumbers(a) {
 let sorted = a.sort((a, b) => a - b);
 let longestLength = 0;
 let start = 0;
 let currentArray = [];

 for ( let i = 0; i < sorted.length; i++ ) {
    let result = Math.abs(sorted[start] - sorted[i]);
    if ( result <= 1) {
          currentArray.push(sorted[i]);
          if (currentArray.length > longestLength) {
            longestLength = currentArray.length;
          }
    }
    else {
        start = i;
        if (currentArray.length > longestLength) {
            longestLength = currentArray.length;
        }
        currentArray = [];
        currentArray.push(sorted[i]);
    }
 }

 return longestLength;
}