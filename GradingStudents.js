// Sam is a professor at the university and likes to round each student's grade
// according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3,
// round grade up to the next multiple of 5.

// If the value of grade is less than 38,
// no rounding occurs as the result will still be a failing grade.

// Examples
// grade = 84 round to 85 (85 - 84 is less than 3)
// grade = 29 do not round (result is less than 40)
// grade = 57 round to 60 (60 - 57 is 3)

function gradingStudents(grades) {
  let roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    // current grade
    let grade = grade[i];
    let result;

    if (grade < 38) {
      result = grade;
    } else {
      // finding and rounding the next multiple of 5
      let nextMultiple = Math.ceil(grade / 5) * 5;
      if (nextMultiple - grade < 3) {
        result = nextMultiple;
      } else {
        result = grade;
      }
    }
    // add to the array of rounded grades
    roundedGrades.push(result);
  }

  return roundedGrades;
}
