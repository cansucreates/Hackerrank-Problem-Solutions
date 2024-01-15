/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

// psuedocode timeConversion
// Extract the hour as an int, min, sec from the input string
// Check if its PM or AM
// If PM, add 12 to the hour
// if AM and hour is 12, set it to 0
// Return the hour, min, sec as a string

function timeConversion(s) {
  let result = "";
  let hour = parseInt(s.slice(0, 2));
  let minute = s.slice(3, 5);
  let second = s.slice(6, 8);
  let period = slice(-2);

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  // hour is 2 digits if it is less than 10, add a 0 in front
  hour = hour < 10 ? "0" + hour : hour;

  result = hour + ":" + minute + ":" + second;
  return result;
}
