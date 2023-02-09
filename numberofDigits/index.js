//  Write a program that accepts a sentence
//  and calculate the number of letters and digits.

const sent = prompt("Enter a sentence: ");

let letterCount = 0;
let digitCount = 0;

for(let i=0;i<sent.length;i++){
    if(sent[i].match(/[a-z]/i)){
        letterCount++
    }
    else if(sent[i].match(/[0-9]/)){
        digitCount++
    }
}
console.log(`letter count: ${letterCount}`);
console.log(`digit count: ${digitCount}`);