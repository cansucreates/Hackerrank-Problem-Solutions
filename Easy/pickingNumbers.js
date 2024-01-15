// Given an array of integers, find the longest subarray where the absolute 
// difference between any two elements is less than or equal to 1.

// pseudocode:
// 1. sort the array ( in ascending order )
// 2. iterate through the array
// 3. check the difference between the current number and the previous number

function pickingNumbers(a) {

    a.sort((a, b) => a - b);
}