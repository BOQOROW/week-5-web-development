// Helper function: Prompt user and safely parse numeric input
function getNumericInput(promptMessage) {
  let userInput = prompt(promptMessage);
  let parsedValue = parseFloat(userInput);
  // Default to 0 if the user enters invalid text or cancels
  return isNaN(parsedValue) ? 0 : parsedValue;
}

// Reusable function: Calculate total expenditure
function calculateTotalExpenses(food, transport, rent, entertainment, utilities) {
  return food + transport + rent + entertainment + utilities;
}

// Reusable function: Calculate remaining income balance
function calculateRemainingBalance(income, totalExpenses) {
  return income - totalExpenses;
}

// Reusable function: Calculate total financial assets (Remaining balance + Savings)
function calculateTotalAssets(remainingBalance, savings) {
  return remainingBalance + savings;
}

// Main SpendWise application execution
function runSpendWise() {
  console.log("==========================================");
  console.log("   SPENDWISE - FINANCIAL OVERVIEW SUMMARY ");
  console.log("==========================================");

  // 1. Collect user income and expense inputs via prompt dialogs
  let totalIncome = getNumericInput("Enter your total monthly income ($):");
  let foodExpense = getNumericInput("Enter Food & Dining expense ($):");
  let transportExpense = getNumericInput("Enter Transport expense ($):");
  let rentExpense = getNumericInput("Enter Rent & Housing expense ($):");
  let entertainmentExpense = getNumericInput("Enter Entertainment expense ($):");
  let utilitiesExpense = getNumericInput("Enter Utilities expense ($):");
  let savingsAmount = getNumericInput("Enter Savings contribution ($):");

  // 2. Perform financial calculations using reusable functions
  let totalExpenses = calculateTotalExpenses(
    foodExpense,
    transportExpense,
    rentExpense,
    entertainmentExpense,
    utilitiesExpense
  );

  let remainingBalance = calculateRemainingBalance(totalIncome, totalExpenses);
  let totalAssets = calculateTotalAssets(remainingBalance, savingsAmount);

  // 3. Display formatted output in the developer console
  console.log(`Total Monthly Income:  $${totalIncome.toFixed(2)}`);
  console.log("------------------------------------------");
  console.log("EXPENSE BREAKDOWN:");
  console.log(`- Food & Dining:       $${foodExpense.toFixed(2)}`);
  console.log(`- Transport:           $${transportExpense.toFixed(2)}`);
  console.log(`- Rent & Housing:      $${rentExpense.toFixed(2)}`);
  console.log(`- Entertainment:       $${entertainmentExpense.toFixed(2)}`);
  console.log(`- Utilities:           $${utilitiesExpense.toFixed(2)}`);
  console.log("------------------------------------------");
  console.log(`Total Expenses:        $${totalExpenses.toFixed(2)}`);
  console.log(`Remaining Balance:     $${remainingBalance.toFixed(2)}`);
  console.log(`Savings Allocated:     $${savingsAmount.toFixed(2)}`);
  console.log(`Total Net Position:    $${totalAssets.toFixed(2)}`);
  console.log("==========================================");

  // Check budget health status
  if (remainingBalance >= 0) {
    console.log("Status: Excellent! You are operating within your monthly budget.");
  } else {
    console.log("Status: Warning! Your monthly expenses exceed your monthly income.");
  }
}

// Run script upon page load
runSpendWise();