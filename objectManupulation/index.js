// function User(name, age,mobile){
//     this.name = name;
//     this.age= age;
//     this.mobile = mobile;
// }
// var user1 = new User("bijin",26,998787989)

// console.log(user1);



//Accecing object properties

// const user = {
//     name:"bijin",
//     age:"32",
//     marks:{
//         math:20,
//         eng:30
//     }
// }
// console.log(user["marks"]["math"]);//20
// console.log(user.marks.math); //20



///Get keys from an object

// const user1 = {
//     age:26,
//     mobile:897644567,
//     name:"bijin"
// }
// const user = Object.keys(user1)
// console.log(user);

//object to array entries

// const user1 = {
//     age:26,
//     mobile:897644567,
//     name:"bijin"
// }
// const user = Object.entries(user1)
// console.log(user);

//merging object with spread(adding location to old object)

// const user1 = {
//     age:26,
//     mobile:897644567,
//     name:"bijin"
// }

// const newobj={
//     ...user1,
//     location:"kochi"
// }
// console.log(newobj);


//combining two objects

const user1 = {
    age:26,
    mobile:897644567,
    name:"bijin"
}
const user1NewVal = {
    bday:1990
}
const combineobj = Object.assign(user1,user1NewVal)
console.log(combineobj);




