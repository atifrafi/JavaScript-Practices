// arrow function 

// why use arrow function
// modern js part hai
// implicit return karta ha
// this ka sath alag behavior hai

// creating arrow function
const car = (a) => {
    return a;
}
console.log(car('drive'))
// ----------------------

// arrow function with implicit return
let calculate = (a,b)=> a + b
console.log(calculate(8,4))
// matlab samjho jab one line function ho tu usma return likhna ki jarorat nhi ha 
// bina return likha bhi return wala kaam kr dega but { } nhi hona chaiya.
// ----------------------


// arrow function with (this)
// without arrow function this is working
// 👉 Arrow function ka apna this nahi hota
// 👉 Woh outer (parent) scope ka this use karta hai
const objct = {
    name: 'annie',
    age: 20,
    intro: function(){
        return `my name is ${this.name} and age is ${this.age}`
    }
}
console.log(objct['intro']())  

// with arrow function same example
const objct2 = {
    name: 'jhon',
    age: 22,
    intro: ()=>{
        return `my name is ${this.name} and age is ${this.age}`
    }
}
console.log(objct2['intro']())  
// arrow function ka this ki problem ko sahi karna ka lia isko kisi normal function
// ka andar create krdo. kyo ka normal function apna this hota ha jab arrow function
// is normal function andar hoga tu wo isko parent bana kr iska this la lega is tarha 
// arrow function or normal function this ek hi hojayega.

