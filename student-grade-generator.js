// Function to calculate student grade
function studentGradeGenerator(studentScore) {
    let grade;
    // Check if the input is within the valid range
    if (studentScore < 0 && studentScore > 100) {
        console.log ("Invalid marks. Please enter a mark between 0 and 100.");  // Display an error message for invalid input
        
        }else if (studentScore < 40) {
            grade = 'E';
        } else if (studentScore <= 49) {
            grade = 'D';
        } else if (studentScore <= 59) {
            grade = 'C';
        } else if (studentScore <= 79) {
            grade = 'B';
        } else {
            grade = 'A';
        }
        console.log(grade)
        
     
    }

    // Call the function to calculate the student grade
studentGradeGenerator(57)



