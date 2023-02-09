// const number = parseInt(prompt('Enter a positive number: '));

// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibpnacci series: ');
// console.log(n1); 
// console.log(n2);

// nextTerm = n1 + n2;

// while (nextTerm <= number){
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }

// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm; 

console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
function fibonacci(number){
    let n1 = 0, n2 = 1, nextTerm; 

    for(let i=1;i<= number;i++){
        console.log(n1)
        nextTerm = n1+n2
        n2 = nextTerm;
    }
    return n2
}

const result = fibonacci()
console.log(result);



