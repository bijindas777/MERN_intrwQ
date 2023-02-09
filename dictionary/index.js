// With a given integral number n, write a program to generate a dictionary that contains (i, i*i) such that is an integral number between 1 and n (both included). and then the program should print the dictionary.
// Suppose the following input is supplied to the program:
// 8




function createDicitionary(n){
    const dictionary = {};
    for(let i =1;i<=n;i++){
        dictionary[i]=i*i;
    }
   console.log(dictionary);
}
createDicitionary(8);