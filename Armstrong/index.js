

// let sum = 0;

// const number = prompt('Enter a Number: ')
// const numberOfDigits = number.length

// let temp = number;

// while(temp>0){
//     let remainder = temp % 10;
//     sum += remainder ** numberOfDigits

//     temp = parseInt(temp/10)
// }
// if(sum==number){
//     console.log(`${number} is an Armstrong`);
// }else{
//     console.log(`${number} is not Armstrong`);
// }

var number = prompt("Enter a number: ");
var numberOfDigits = number.length;
var sum = 0;

for (i = 0; i < numberOfDigits; i++) {
  sum += Math.pow(number.charAt(i), numberOfDigits);
}
 
if (sum == number) {
  alert("The entered number is an Armstrong number.");
  
} else {
  alert("The entered number is not an Armstrong number.");
}