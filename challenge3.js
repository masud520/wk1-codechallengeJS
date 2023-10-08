function calculateNetSalary(basicSalary, benefits) {
    // Calculate the gross salary.
    const grossSalary = basicSalary + benefits;
    // Calculate the payee (i.e. Tax).
    const payee = 0.3 * basicSalary;
    // Calculate the NHIF deductions.
    const nhifDeductions = 0.06 * basicSalary;
    // Calculate the NSSF deductions.
    const nssfDeductions = 0.06 * basicSalary;
    // Calculate the net salary.
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    // Return the net salary.
    return netSalary;
  }
  // Get the basic salary and benefits from the user.
  const basicSalary = parseFloat(prompt("Enter your basic salary: "));
  const benefits = parseFloat(prompt("Enter your benefits: "));
  // Calculate the net salary.
  const netSalary = calculateNetSalary(basicSalary, benefits);
  // Print the net salary.
  console.log(`Your net salary is: ${netSalary}`);