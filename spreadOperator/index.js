

let array =[1,2,3,4]

 let array2 = [...array]


 array2.push(5)

 array2.unshift(0)
 array2.splice(1,1)
 console.log(array2);


 let arr1 = [0, 1, 2];
 const arr2 = [3, 4, 5];

 arr = [...arr1,...arr2]
console.log(arr);