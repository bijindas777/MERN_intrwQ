let arr= [1,2,3,4,[5,6,7],8,[9,10,11],12]

let flatArray = arr.concat.apply([],arr);
console.log(flatArray);