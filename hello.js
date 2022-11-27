//print whatever's inside the round brackets
// console.log("Hello world");
// console.log("laulele");
//string -> "ranjan 4334#$#%&^";
// console.log(2 + "6");
// console.log(5 + 9);
// console.log(typeof true);
// console.log(false);
// console.log(typeof "p");
//undifined
//null
//const cannot be chaged
// const name = "ranjan";
// const another_name = "laulele";

//name = "ppap";

//declare variable which can change value
//let name;
// name = "Rahul";
// console.log(name);

//null is given by prgrammer(intentional)
//undefined is given by javascript

// const a = 10;
// const b = 45;

//non zero value is true
//0 value is false
// undefined/null is false

// if(a<b){
//     console.log("a is smaller");
// }else {
//     console.log("a is bigger");
// }

// if (undefined) {
//   console.log("a is smaller");
// } else {
//   console.log("a is bigger");
// }

// if (null) {
//   console.log("a is smaller");
// } else {
//   console.log("a is bigger");
// }

//loops
// repetitive tasks => for loops
// initialisation
// conditions
// increment/decrement

// const n = 10,x=4;
// for (let i = 1; i <= n; i++) {
//   console.log(i*x);
// }

//array
//JSON = objects

//const a = [15, 78, "ranjan", null, undefined];

//square bracket helps you access the value of array
//nth element a[n-1]

// for (let i = 0; i < 10; i++) {
//   console.log(a[i]);
// }
//dont use for loop for production
//we use something called map => to execute the program one by one

//key value pair
// const person_details = {
//   name: "Ranjan",
//   surname: "sharma",
//   age: 24,
//   cartoons_liked: ["shinchan", "naruto", "doremon"],
//   school: [, , ,],
// };

// //.operator
// console.log(person_details);

//Error handling

// try {
//   const a = 10;
//   a = 11;

// } catch (err) {
//   console.log(10 + 5);
// }

// try {
//   const a = 10;
//   throw new error("a is a const");
// } catch (err) {
//   console.log(5);
// }

//funtion
//function square(x) {
//local variable
// return x * x;
//}
//maggi making instructions function;
// function break_cake(cake) {
//   return cake / 4;
// }
// function cook_maggi(cake, tastemaker, water, pan) {}
// const a = 10;
// console.log(square(a));

var cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "✔✔",
    T: "U ",
  })
);
