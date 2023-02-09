//Add one to each elememts in the array

// const number = [1,2,3,4,5,6]

// function addOne(array){
//     for (let i = 0;i < array.length;i++)
//     {
//         console.log(array[i] + 1);
//     }
// }
// addOne(number)


// const numbers = [1,2,3,4,5,6]

// numbers.forEach((number)=>console.log(number + 1));


// Adding 1 to Array elements and get new array

const numbers = [1,2,3,4,5,6]


// function addOne(array,newArr= []){
//     for(let i = 0;i<array.length;i++){
//   newArr.push(array[i] + 1)
//     }
//     return newArr
// }
// const newArray = addOne(numbers)

// console.log(newArray);

//in higher order functions( using map)


// const numbers = [1,2,3,4,5,6]

// const newArray = numbers.map((number)=> number + 1)
// console.log(newArray);

//function for getting odd number from an array

// const numbers = [1,2,3,4,5,6]

// function isOdd(array,oddArr = []){
//     for (let i = 0;i<array.length;i++){
//         if(array[i] % 2 !== 0){
//             oddArr.push(array[i])
//         }
        
//     }
//     return oddArr
// }
// const oddArray = isOdd(numbers)
// console.log(oddArray);
// using higher order function filter

// const numbers = [1,2,3,4,5,6]
// oddArray = numbers.filter((number)=>number%2 !== 0)
// console.log(oddArray);

// add sum of an array

// const numbers = [1,2,3,4,5]

// function addSum(array){
//     let sum = 0
//     for (let i = 0;i<array.length;i++){
//        sum+=array[i] 
//     }
//     return sum;
// }
// const totalSum = addSum(numbers)
// console.log(totalSum);


// const numbers = [1,2,3,4,5]

// const totalSum = numbers.reduce((sum,number)=>sum + number)
// console.log(totalSum);






