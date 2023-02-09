// Use a array comprehension to square each odd number in a array.
// The array is input by a sequence of comma-separated numbers.
// Suppose the following input is supplied to the program:
// [1,2,3,4,5,6,7,8,9]


let numbers = [1,2,3,4,5,6,7,8,9]


let sqodds = numbers.filter(n=> n % 2 !== 0).map(n=>n**2)

console.log(sqodds);