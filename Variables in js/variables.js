// create a variable using let keyword an store number value
let numOne = 20;
// console.log(numOne)
let numTwo = numOne;
// console.log(numTwo)

// what is hoisting ?
let numThree; // variable declare first
console.log(numThree); // undefined  // without assign call
numThree = 50; // variable assign letter
console.log(numThree); // 50
// JS code run karna se phela variables aur functions ko memory
// me register karti hai. is process ko hoisting kheta hai
// [ Important Note ]
// var let or const sab hoisting hoti hai.
// var ko hoisting karna pr use karna pr undefined aye ga.
// but let or const ko hoisting karna ka baad jab use karoga tu REFRENCE ERROR
// aye ga TDZ ki waja se.
// What is TDZ temporal dead zone ?
// ya ju declare karna se phela unsafe area hota hai isko
// temporal dead zone kheta hai.

// let - const - var
// let allow reassign but not allow redeclare
let AK = "hero";
AK = "villan"; // re assign allow
console.log(AK);
// const not allow redeclare & reassign
const MJ = 100;
// MJ = 200;  // error assignment a constent variable
console.log(MJ);
// var allow redeclare & reassign
var IK = 300;
IK = 400;
var IK = 500;
console.log(IK);

// what is SCOPE ?
// variable kaha tak accessible hai or kaha nhi isko scope kheta hai.
// var is function scope
// function ka andar var variable create karka
// function ka bahir is var variable ko access nhi kia ja sakta.
// let is block scope { }
// barces andar ka let variable ko access nhi kia ja sakta.
// const is block scope { }
// barces andar ka let variable ko access nhi kia ja sakta.
// global scope kya hai ?
// agr variable ko function ya braces ka bahir create kia hai
// tu uska scope global hoga wo kahi bhi access ho sakta hai.
// practical
// function scope
function say() {
  var greet = "hey";
  console.log(greet);
}
say();
// console.log(greet) // ReferenceError: greet is not defined
// block scope for let
{
  let gh = 88;
  console.log(gh)  // accessible
}
// console.log(gh)  // ReferenceError: gh is not defined
// block scope for const 
{
  let mn = 99;
  console.log(mn)  // accessible
}
console.log(mn)  // ReferenceError: gh is not defined


// variables store any kind of data
// number , string , boolean , array , object , function etc
