// Write a program that accepts a sequence of whitespace separated 
// words as input and prints the words after removing all duplicate
//  words and sorting them alphanumerically.





let inputWords = prompt("Enter words: ").split(" ");
let uniqueWords = Array.from(new Set(inputWords));
let sortedWords = uniqueWords.sort();
console.log(sortedWords.join(" "));