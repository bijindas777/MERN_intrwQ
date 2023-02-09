// Write a program that computes the net amount of a bank account based a transaction log from console input. The transaction log format is shown as following:
// D 100
// W 200
// ¡­
// D means deposit while W means withdrawal.
// Suppose the following input is supplied to the program:
// D 300
// D 300
// W 200
// D 100


function calnetAmount(transactions){
    let netAmount = 0;
    for(let i = 0;i<transactions.length;i++){
        let parts = transactions[i].split(" ");
        let transaction = parts[0];
        let amount = parseInt(parts[1]);
        if(transaction ==="D"){
            netAmount += amount;
        }
        else if(transaction === "W"){
            netAmount -= amount;
        }
    }
    return netAmount;
}

let transactions = ["D 300","D 300","W 200","D 100"];

console.log("Net amount: " + calnetAmount(transactions));