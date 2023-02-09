// Write a program that calculates and prints the value according to the given formula:
// Q = Square root of [(2 * C * D)/H]
// Following are the fixed values of C and H:
// C is 50. H is 30.
// D is the variable whose values should be input to your program in a comma-separated sequence.
// Example
// Let us assume the following comma separated input sequence is given to the program:
// 100,150,180

 const C = 50;
 const H = 30;

 //get input as a list of integers

 const D_input = prompt("Enter a comma-seperated sequence of values for D: ")

 const D = D_input.split(",").map(x=>parseInt(x));


 ///Calculate and print the value of Q for each value of D

 for(const d of D){
    const Q = Math.sqrt((2*C*d)/H);
    console.log((`Q = ${Q.toFixed(2)}`));
 }