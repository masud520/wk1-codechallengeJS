function calculateGrade() {
    // Prompt the user for input
    const input = prompt("Enter student marks (0-100):");
  
    // Check if the input is a valid number between 0 and 100
    if (isNaN(input) || input < 0 || input > 100) {
      alert("Invalid input. Please enter a number between 0 and 100.");
      return;
    }
  
    // Determine the grade based on the input
    let grade;
    if (input > 79) {
      grade = "A";
    } else if (input >= 60) {
      grade = "B";
    } else if (input >= 50) {
      grade = "C";
    } else if (input >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // Display the grade to the user
    alert(`Student grade: ${grade}`);
  }
  
  // Call the function to start the grading process
  calculateGrade();
