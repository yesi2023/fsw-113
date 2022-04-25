// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class student {
  constructor(...argument) {
    (this.studentName = argument[0]),
      (this.className = argument[1]),
      (this.studentScores = argument[2]),
      (this.possibleScores = argument[3]);
  }

  totalStudentScores(studentScores) {
    let array = convertArray(studentScores);
    array = array.map(Number);
    let sum = array.reduce((a, b) => {
      return a + b;
    }, 0);
    return sum;
  }

  totalPossibleScores(possibleScores) {
    let array = convertArray(possibleScores);
    array = array.map(Number);
    let sum = array.reduce((a, b) => {
      return a + b;
    }, 0);
    return sum;
  }

  calculateGrade() {
    let totalScores = this.totalStudentScores(
      document.getElementById("studentScores").value
    );
    let sumPossibleScores = this.totalPossibleScores(
      document.getElementById("possibleScores").value
    );

    var result = totalScores / sumPossibleScores;
    var endingGrade;

    if (result >= 90) {
      endingGrade = "A";
    } else if (result >= 80) {
      endingGrade = "B";
    } else if (result >= 70) {
      endingGrade = "C";
    } else if (result >= 60) {
      endingGrade = "D";
    } else result >= 59;
    endingGrade = "F";

    console.log(endingGrade);
    return endingGrade;
  }
}
