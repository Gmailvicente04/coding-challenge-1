// Task 1: Variables
// Scenario: Employee Information

// Step 1: Declare a variable employeeName using let and assign it the employee's name
let employeeName = "Jim Halpert";

// Step 2: Declare a variable employeeID using const and assign it the employee's ID
const employeeID = 12345;

// Step 3: Declare a variable isActive using var and assign it a boolean value true
var isActive = true;

// Step 4: Log each variable's value and its type to the console
console.log("Employee Name:", employeeName, "Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "Type:", typeof employeeID);
console.log("Is Active:", isActive, "Type:", typeof isActive);

// Task 2: Primitive Data Types
// Scenario: Product Details

// Step 1: Declare a variable productName using let and assign it a string value
let productName = "Air Jordan 1";

// Step 2: Declare a variable productPrice using const and assign it a numerical value
const productPrice = 299.99;

// Step 3: Declare a variable isAvailable using var and assign it a boolean value
var isAvailable = true;

// Step 4: Log each variable's value and its type to the console
console.log("Product Name:", productName, "Type:", typeof productName);
console.log("Product Price:", productPrice, "Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable);


// Task 3: Number Data Type
// Scenario: Financial Transactions

// Step 1: Declare a variable accountBalance using let and assign it a number representing the initial balance
let accountBalance = 2000;

// Step 2: Perform basic arithmetic operations and log the updated values
accountBalance += 700; // Deposit
console.log("After deposit:", accountBalance);

accountBalance -= 200; // Withdrawal
console.log("After withdrawal:", accountBalance);

accountBalance *= 1.05; // Interest
console.log("After applying interest:", accountBalance);

accountBalance /= 2; // Split balance
console.log("After splitting balance:", accountBalance);

// Task 4: String Data Type
// Scenario: Customer Messaging

// Step 1: Declare a variable customerName using let and assign it a string value
let customerName = "Dwight Schrute";

// Step 2: Concatenate strings to form a welcome message
let welcomeMessage = "Hello " + customerName + ", thank you for shopping with us!";

// Step 3: Log the welcome message to the console
console.log(welcomeMessage);

// Task 5: Boolean Data Type
// Scenario: Access Control

// Step 1: Declare a variable isLoggedIn using let and assign it a boolean value
let isLoggedIn = true;

// Step 2: Use logical operations to check access conditions
let hasAccess = isLoggedIn && true; // Example condition

// Step 3: Log results to the console
console.log("Is Logged In:", isLoggedIn);
console.log("Has Access:", hasAccess);
