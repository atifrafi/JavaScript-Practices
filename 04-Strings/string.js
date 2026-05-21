// string datatype and methods or type conversion
// string banana ka lia Quotes ka use hota hai
// 1. double quotes ""
// 2. single quotes ''
// 3. backtick

// three way to create string
let doubleQuoteStr = "Hi i'm annie";
console.log(doubleQuoteStr); // double quote string

let singleQuoteStr = 'Javascript "sad" ';
console.log(singleQuoteStr); // single quote string

let backtickStr = `React js`;
console.log(backtickStr); // backtick string

// string ka sath js likhna ka lia backtick ka use hota hai
let name = "srk";
console.log(`Hi name is ${name}`);

// string ka methods
// concat string string ko concat karna ka lia
let str1 = "apple";
let str2 = "mango";
console.log(str1.concat(str2));

// other way to concat string without using method isko append kheta ha
let str3 = (str1 += str2);
console.log(str3);

// slice() method
console.log(str2.slice(3, 5));
// console.log(str2.length)
// console.log(str2[4])
// string bhi ek kisam ka array ha
// working
// str2[5] likhna pr js undefined deta ha kyo ka 5 index pr kuch nhi ha
// lakin slice alag tariqa se work karta ha wo bolta ha kaha se kaha tak ka
// part slice kr ka du hum kheta ha index 3 se start kro or index 5 pr end kro
// result ma go mila ga

// split() method
// ya string ko split karka array bana deta ha
let str4 = "car bike bus truck";
console.log(str4.split(" "));
console.log(str4.split(","));
console.log(str4.split(" ").join("-"));

// IMPORTANT NOTE:
// join() method
// ya array ko join karka string bana deta ha
// lakin ya real array ka sath work karta ha
// split se bana array ka sath work nhi krta
// matlab agr split ka use krka string ko array banaya ho tu
// us pr join work nhi krega.

// string case change methods
console.log(str1.toLocaleLowerCase()); // lowercase
console.log(str1.toLocaleUpperCase()); // uppercase

// inclue() method
// boolean return karta ha ya tu true ya tu false
// ya bus check krta ha particlur chracter string ma ha ya nhi
console.log(str2);
console.log(str2.includes("p")); // mango ma p nhi ha islia false
console.log(str2.includes("m")); // m ha islia true

// trim() method
let str5 = "   lemon";
console.log(str5)
console.log(str5.trim());
// trim method unnessicery space remove krdeta hai


// type conversion 
// string ko number ma convert krna
// number ko string ma convert krna
let numbar = 22;
// console.log(typeof numbar) // ya number hai
// isko string ma convert krna ka lia 
let numberToString = numbar.toString()
console.log(numberToString) // number se string ma convert
console.log(typeof numberToString) // is ka type string ha
console.log(String(numberToString)) // another method tu convert number into string

// string ko number ma convert krna
let str0 = '50.98'
console.log(typeof str0) // ya string ha
let stringToNumber = parseInt(str0)//
console.log(typeof stringToNumber) // string ko number ma convert kia
console.log(stringToNumber) // datatype number ha 
console.log(parseFloat(str0))

// summary
// ya dono tariqa se number ko string ma convert kar sakta hai
// .toString
// string()
// teen tariqa ha string ko number ma convert krna ka
// number()    // ya normal number ka lia
// parseInt()  // ya bhi normal number ka lia
// parseFloat() // ya float number ka lia
