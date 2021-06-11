
// Calculate the grade
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
//90-100: A

const marks = [80, 80, 100];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    let totalGrades = 0;
    
    let count = 0;
    for (let key in marks) {
        totalGrades += marks[key];
        // count ++;
    }

    let finalGrade = (totalGrades/marks.length);
    if (finalGrade <= 59 ) return 'F';
    if (finalGrade <= 69 ) return 'D';
    if (finalGrade <= 70 ) return 'C';
    if (finalGrade <= 80 ) return 'B';
    return 'A';
    
}