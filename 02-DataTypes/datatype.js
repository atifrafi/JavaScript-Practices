// js ma two type ka data types hota hai.

// 1-Primitive Data Types
// wo datatypes ha ju single value store karta hai.
// number -> 200
// string -> 'apple'
// boolean -> true/false 
// undefined -> not assign value 
// null -> intentionally empty value
// bigint -> very large number (1234567n) 
// symbol -> unique identifier

let num = 27;      // is variable ki datatype number hai
let str = 'orange' // is variable ki datatype string hai
let bool = true    // is variable ki datatype boolean ha or boolean ki du hi value ha true ya false
let undefine;         // is ki datatype automatically undefined ha kyo ka isko koi value assign nhi ki
let empty = null      // is ko jan kr empty rakha hai
let bigintiger = 44190430n   // is ki numeric value big hai
let symbl = Symbol(11) // unique value rakhna ka lia
console.log(num)     // call
console.log(str)     // call
console.log(bool)    // call
console.log(undefine)   // call
console.log(empty)      // call
console.log(bigintiger) // call
console.log(symbl)      // call

// Important things about these DataTypes
// Number - data type leading zero ignore karta hai means ka value agr
// 0 se start hogi tu wo usko ignore krdega. waisa tu error dega likhna hi nhi dega
// ya modern js ka part hai
// let num1 = 02 error
// -------------
// symbol - iski value ma agr same ho dosri symbol se tu wo reality ma diffrent hogi
// kyo ka ya value ko unique banata hai iska use ziyada tar object ma hota hai
let symbol1= Symbol(20);
let symbol2= Symbol(20);
console.log(symbol1 == symbol2)  // false ayega
// reason: dekhna ma same ha lakin reality ma symbol ki value unique hoti hai
// -----------
// boolean - ya true or false return krta ha
// js ma undefined , NaN , empty Quotes , null , 0 , -0 , false ya sab falsy values ha
// agr inma se koi value ha tu wo boolean ma false return karega
let a= null
console.log(a && true)
// ya pr null return hoga kyo ka and operator pheli falsy value return krdeta ha


// 2.Non Primitive(Refrence) Data Types
// ya aisa data type ha ju multiple values store kar sakta hai
// object ->    { name: 'annie', age: 27 }
// array ->     [ 10 , 20 , 30 ] 
// function ->  function () {} 
// Date, Map, Set (advanced object) ya sab bhi non-priitive datatype hai

// object data type
let objct = {
    name: 'annie',
    age: 27,
    field: 'CS',
    hobbies: 'reading'
}
// console.log(objct) // pura object call
console.log(objct['name']) // key ki help se value call karna object ki
// bracket notation se 
console.log(objct.name) // dot notation se call ki object ki value

// array data type
let arr00 = ['apple','banana','tomoto']
console.log(arr00) // pura array call karna 
console.log(arr00[0]) // array ma se particular value call karna index ki help se


// note: function , date , time , set 
// ya aga perhenga......

