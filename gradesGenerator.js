

function getAverage(arr) {
  let result = 0;
  for (const score of arr) {
    result += score;
  }
  return result/arr.length
}

function getGrade (score) {
  let result = "";
  if (score === 100) {
    result = "A+"
  } else if (score >= 90) {
    result = "A"
  } else if (score >= 80) {
    result = "B"
  } else if (score >= 70) {
    result = "C"
  } else if (score >= 60) {
    result = "D"
  } else if (score >= 0) {
    result = "F"
  }
  return result
}

function hasPassingGrade (score) {
  const passGrade = getGrade(score);
  return passGrade !== "F"
}

console.log(hasPassingGrade(60))

function studentMsg (arr, score) {
  const avg = getAverage(arr);
  const grade = getGrade(score);

  return `Class average: ${avg}. Your grade: ${grade}. You ${
    hasPassingGrade(score) ? "passed" : "failed"
  } the course.`;
}



