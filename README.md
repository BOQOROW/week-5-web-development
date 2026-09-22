# SpendWise - Dashboard & JavaScript Foundation

## Description
SpendWise is a personal finance dashboard application designed to help users track monthly income and category-based expenditures. In this iteration, the application transitions from a purely visual dashboard into an interactive budget tracker that prompts the user for financial inputs, performs logic calculations, and prints a formatted summary directly to the browser console.

## JavaScript Concepts Implemented

- **Variables & Data Types:** Used `let` declarations to store numeric float values representing total income, savings, and individual category expenses.
- **User Input Collection:** Utilized browser `prompt()` dialogs to interactively gather monetary values for each budget category upon page load.
- **Data Conversion & Parsing:** Applied `parseFloat()` to convert string entries from prompt pop-ups into floating-point numbers. Included `isNaN()` fallback checks to prevent errors when users enter invalid input or cancel prompts.
- **Calculations & Math:** Used basic arithmetic operators (`+`, `-`) to calculate aggregate expenditure, remaining budget balance, and net assets.
- **Reusable Functions:** Created clean, modular functions (`calculateTotalExpenses`, `calculateRemainingBalance`, `calculateTotalAssets`, and `getNumericInput`) to separate data processing from application execution.
- **Console Output Formatting:** Outputted structured financial logs to the browser console using template literals (`${}`) and `.toFixed(2)` string formatting.

## How to Run

1. Download or clone this repository to your local machine.
2. Open `index.html` in any modern web browser.
3. Respond to the pop-up input prompts to enter your monthly income and category expense values.
4. Open the Developer Tools console:
   - **Windows/Linux:** Press `F12` or `Ctrl + Shift + J`
   - **Mac:** Press `Cmd + Option + J`
   - Or right-click anywhere on the page and select **Inspect > Console**.
5. View your calculated financial overview and budget health status in the console log.
