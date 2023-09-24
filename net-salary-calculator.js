// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    // Define tax rates using the link provided
    const incomeTaxRates = [
        { min: 0, max: 12298, rate: 0 },
        { min: 12299, max: 23885, rate: 10 },
        { min: 23886, max: 35472, rate: 15 },
        { min: 35473, max: 47059, rate: 20 },
        { min: 47060, max: 58647, rate: 25 },
        { min: 58648, max: Infinity, rate: 30 },
    ];

    const nhifRates = [
        { min: 0, max: 5999, rate: 150 },
        { min: 6000, max: 7999, rate: 300 },
        { min: 8000, max: 11999, rate: 400 },
        { min: 12000, max: 14999, rate: 500 },
        { min: 15000, max: 19999, rate: 600 },
        { min: 20000, max: 24999, rate: 750 },
        { min: 25000, max: 29999, rate: 850 },
        { min: 30000, max: 34999, rate: 900 },
        { min: 35000, max: 39999, rate: 950 },
        { min: 40000, max: 44999, rate: 1000 },
        { min: 45000, max: 49999, rate: 1100 },
        { min: 50000, max: 59999, rate: 1200 },
        { min: 60000, max: 69999, rate: 1300 },
        { min: 70000, max: 79999, rate: 1400 },
        { min: 80000, max: 89999, rate: 1500 },
        { min: 90000, max: 99999, rate: 1600 },
        { min: 100000, max: Infinity, rate: 1700 },
    ];

    // Define NSSF rate
    const nssfRate = 200;

    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Calculate Income Tax
    let incomeTax = 0;
    for (const rate of incomeTaxRates) {
        if (grossSalary > rate.min) {
            const taxableAmount = Math.min(grossSalary - rate.min, rate.max - rate.min);
            incomeTax += (taxableAmount * rate.rate) / 100;
        }
    }

    // Calculate NHIF Deductions
    let nhifDeductions = 0;
    for (const rate of nhifRates) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            nhifDeductions = rate.rate;
            break;
        }
    }

    // Calculate NSSF Deductions
    const nssfDeductions = Math.min(nssfRate, (basicSalary * 0.06));

    // Calculate Payee (Tax) 
    const payee = incomeTax;

    // Calculate Net Salary
    const netSalary = grossSalary - (incomeTax + nhifDeductions + nssfDeductions);

    // Return the calculated values
    return {
        grossSalary,
        incomeTax,
        nhifDeductions,
        nssfDeductions,
        payee,
        netSalary,
    };
}

const basicSalary = 60000;
const benefits = 20000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: " + salaryDetails.grossSalary);
console.log("Income Tax: " + salaryDetails.incomeTax);
console.log("NHIF Deductions: " + salaryDetails.nhifDeductions);
console.log("NSSF Deductions: " + salaryDetails.nssfDeductions);
console.log("Payee (Tax): " + salaryDetails.payee);
console.log("Net Salary: " + salaryDetails.netSalary);







