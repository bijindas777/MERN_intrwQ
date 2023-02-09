// var arr = ['a','b','c','d']

// for loop

// for(var i = 0;i<=arr.length-1;i++){
// console.log(arr[i]);
// }
//using foreach

// arr.forEach(function(element){
//     console.log(element);
// })
//2d Array looping
var arr = [['a','b','c'],
           ['d','e','f']
]
// for loop

// for(var i = 0;i<arr.length;i++){
//     for(var j = 0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }

// }

//forEach
arr.forEach(function(element){
    element.forEach(function(element){
        console.log(element);
    })
})