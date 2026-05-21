// Js opertors
// 1. arthmatic operators
// add operator    +
// minus operator       -
// multiply operator    *
// divide operator      /
// exponent operator    **
// modulous operator    % 
let n1 = 10; 
let n2 = 20;
console.log(n1 + n2) // two number add by add operator
console.log(n2 - n1) // n2 minus n1 by minus operator
console.log(n1 * n2) // n1 multiply n2 by multiply operator
console.log(n2 / n1) // n2 divide by n1 using divide operator
console.log(n1 ** 2) // n1 ki power 2 power mean exponent
console.log(n2 % n1) // modulous mean reminder divide hona ka baad ju remaining value hai 

// ------------------

// 2. increment an decrement operators
// increment operator ++
// decrement operator -- 
// note: imsa post or pre bhi hota hai
let n3 = 1;
n3++; // post increment operator
console.log(n3) // 1 se increment hoga
n3--; // post decrement operator
console.log(n3) // 1 decrement hoga wapis se 1 hoga
let n4 = 1;
++n4; // abhi ya 1 hi ha jab tak call nhi hota tab tak 1 hi rehta hai jaise hi call hoga 2 hojayega
console.log(n4) // call hona ka baad 2 hogia 
--n4; // abhi 2 hai 
console.log(n4) // call hota hi 1 ho jayga

// ------------------


// 3. comparision operators
// or true ya false ma answer deta hai
// type of comparision operator
// - relational comparision operator 
// > greater than operator
// < less than operator
// >= greater than and equalto operator (ya du se ziyada condition check kr raha hai)
// <= less than and equalto operator (ya du se ziyada condition check kr raha hai)
// note: left side se code check hota ha js mein matlb condition ko chk left side se start hota hai
let val1 = 100
let val2 = 90
console.log(val1 > val2) // true 
console.log(val1 < val2) // false
console.log(val1 >= val2) // true 
// ya pr two condition ha 1st condition kya value1 value2 se bari hai
// 2nd condition kya value1 value2 ka equal hai 
// is case ma pheli condition true ha or second condition false ha
// koi ek conditon bhi true hoti ha tu result ma true hi ayega
console.log(val1 <= val2) // false
// is case ma dono condition false ha islia result ma bhi false ayega

// - equality comparision operator
// === strict equalto operator (datatype + value) dono check krta ha
// !== not strict equalto operator (datatype + value) ya strict equalto ki opposite work krta hai
// == equalto (value)
// != not equalto (value) equalto operator ka opposite work krta hai
let strNum = '20'
let num = 20
console.log(strNum === num) // false
console.log(num === num)  // true
console.log(strNum !== num) // true 
console.log(strNum == num) // true is case ma type conversion use hua ha
console.log(strNum != 10) // true hoga kyo ka not equal hai isma bhi type conversion use hua ha

// ------------------

// 4.logical operators
// && and operator
// || or operator
// ! not operator
// note: jis pr ya operator laga hota ha unko operand kheta hai
// ya double condition chk krta hai
// ( && and operator ) 
// true && true result ma true return krta hai
// false && true result ma false return krta ha reason ya ha phela operand agr 
// false hua tu agla operand ko nhi check krta return false krta hai
// or agr 1st operand true ha or 2nd false hua tu and operator false reutrn krta ha
console.log(true && false) // false
console.log(false && true) // false
console.log(true && true) // true
console.log(false && false) // false

// ( || or operator )
// or operator ma true || true hua tu result ma true return krta ha
// true || false hua tu true return krta ha kyo ka isko agr ek operand bhi true milgia 
// tu true return krta ha
// false || true hua tu tab bhi true return krta ha 
// agr false || false hua tu false return krta hai
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

// ------------------ 

// ( ! not operator )
// ya opposite work krta ha true ko false return krta hai
// aur false ko true return krta ha
console.log(!false) // true return krega

// ------------------ 

