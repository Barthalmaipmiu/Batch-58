//Basic Programming Practice Problems Assignment4

// 1. Assign "Hello, World!" to this variable and print it.
let greeting: string;
greeting = "Hello, World!";
console.log(greeting);

//2.Assign integer values and perform arithmetic operations.
let num1: number = 10;
let num2: number = 5;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// 3.Swap these values without using a new variable.
let a: number = 1;
let b: number = 2;
[a, b] = [b, a];
console.log("a:", a, "b:", b);

// 4.Now try assigning a number to it and see what happens.
let message: string;
//message = "Hello"; // This is valid
//message = 5; // This will give a compilation error

// 5.Use the modulus operator (%) to find the remainder.
num1 = 10;
num2 = 3;
console.log("Remainder:", num1 % num2);

// 6. Increment this value by 1 in two different ways.
let counter: number = 0;
counter = counter + 1; // Method 1
counter += 1; // Method 2
console.log("Counter:", counter);

// 7.Given three boolean variables, write expressions for AND, OR, and NOT gates.
let aa: boolean = true;
let bb: boolean = false;
let cc: boolean = true;
console.log("AND gate:", aa && bb && cc);
console.log("OR gate:", aa || bb || cc);
console.log("NOT gate:", !aa, !bb, !cc); 

// 8.Use +=, -=, *=, and /= on this variable.
let num: number = 10;
num += 5; // num = num + 5;
num -= 3; // num = num - 3;
num *= 2; // num = num * 2;
num /= 4; // num = num / 4;
console.log("Result:", num);

// 9.Determine if this is even or odd.
let numDetermine: number = 7;
if (numDetermine % 2 === 0) {
  console.log(numDetermine + " is even");
} else {
  console.log(numDetermine + " is odd");
}

// 10. Check if age is 18 or older to determine voting eligibility.
let age: number = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// 11. Use conditionals to assign and print grades A, B, C, D, or F.
let score: number = 75;
let grade: string;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade:", grade);

// 12. Determine the largest among these.
let x: number = 5,
  y: number = 8,
  z: number = 3;
let max: number = x;
if (y > max) {
  max = y;
}
if (z > max) {
  max = z;
}
console.log("Max:", max);

// 13. Determine if this is a leap year.
let year: number = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// 14. Convert this to Celsius and print the result.
let fahrenheit: number = 68;
let celsius: number = (fahrenheit - 32) * (5 / 9);
console.log(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");

// 15. Determine the sign of this number (Positive, Negative, or Zero).
let number: number = 11;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 16. Print the multiplication table for this number up to 10.
let table: number = 7;
for (let i: number = 1; i <= 10; i++) {
  console.log(table + " * " + i + " = " + table * i);
}
