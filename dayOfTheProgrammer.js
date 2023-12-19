// NOTES:
// year of range = 1700 - 2700
// programmers day = 256th day
// from 1700 - 1917 Julian Calender
// from 1919 - 2700 Gregorian Calender
// year of transition = 1918
// on transition day from jan 31 to feb 14(32 day of the year)

// feb on leap year = 29
// feb on normal year = 28

// on julien calender leap year = if year is divisible by 4
// on gregorian calender leap year = if year is divisible by 400 or divisible by 4 and not divisible by 100

// find the exact day of the programmers day
// print the date in the format dd.mm.yyyy

// pseudo code:

// 1. take the year
// 2. check if the year is julian
// 3. if it is julian
//       check if the year is leap year by dividiing it by 4
// 4. if it is leap year
// calculation:
//       feb = 29 day
//       sum the day of the first eight months
//       256 - the sum you found
//       the result is programmers day ( 13.09.year)

// 5. if it is not leap year
//       feb = 28 day
//       sum the day of the first eight months
//       256 - the sum you found
//       the result is programmers day ( 12.09.year)
// 6. if it is gregorian
//       check if it is leap year by dividing it by 400 or 4 and not 100
//       if it is leap year
//           feb = 29 day
//           sum the day of the first eight months
//           256 - the sum you found
//           the result is programmers day ( 13.09.year)
//       if it is not leap year
//           feb = 28 day
//           sum the day of the first eight months
//           256 - the sum you found
//           the result is programmers day ( 12.09.year)
// 7. if its 1918 year of Transition
//           feb = 15 days
//           sum the day of the first eight months
//           256 - 230
//           the result is programmers day ( 26.09.1918)
// 8. return the date in the format dd.mm.yyyy

function dayOfProgrammer(year) {
  // transition year
  if (year === 1918) {
    return "26.09.1918";
  }
  // julian calender
  if (year <= 1917) {
    if (year % 4 === 0) {
      return "12.09." + year;
    } else {
      return "13.09." + year;
    }
  }
  // gregorian calender
  else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return "12.09." + year;
    } else {
      return "13.09." + year;
    }
  }
}
