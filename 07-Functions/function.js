// functions in js

// Basic function
function hello (say){
    console.log(say)
}
// hello('hello atif')

// function exparsion
let car = function (action){
    console.log(`car is ${action}`)
}
car('running')
car('stop')

// function exparsion with return
let addFunc = function (x,y){
    return x * y
}
console.log(addFunc(20,5))


// higher order or callback function kya hai ?
// callback function 
// 1. Callback function kya hota hai?
// Callback function woh function hota hai jo kisi dusre function ko argument ke taur par pass kiya jata hai,
//  aur baad mein execute hota hai.

// 2. Higher-Order Function kya hota hai?
// Higher-order function woh function hota hai jo:
// - ya to ek function ko argument leta hai
// - ya ek function return karta hai


// normal function 
let higherOrderFunc = function (a){
    return a()
}

let callbackFunc = function (){
    console.log('hello from callback')
}

// console.log(higherOrderFunc(callbackFunc)) // ya undefined dega console ki waja sa
higherOrderFunc(callbackFunc)
