// Write a program which accepts a sequence of comma-separated numbers from console and generate a list and a tuple which contains every number.
// Suppose the following input is supplied to the program:
// 34,67,55,33,12,98

const numbersString = prompt("Enter a sequence of numbers: ");

const numbersArray = numbersString.split(",");
const numbersList = numbersArray;
const numbersTuple = numbersArray;
console.log(numbersList);
console.log(numbersTuple);