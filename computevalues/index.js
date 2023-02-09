const a = prompt("Enter a digit: ")

let sum = 0;
let current = a;

for(let i=0;i<4;i++){
    sum+=Number(current)
    current+=a
}
console.log(`sum is:${sum}`);