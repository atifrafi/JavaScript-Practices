// conditional statements and switch case


// Even Odd check
let num = 6;
if (num % 2 === 0) {
    console.log('EVEN')
}else{
    console.log('ODD')
}

// positive , negative number check
let num0 = -100;
if (num0 >= 1) {
    console.log('Positive Number')
} else {
    console.log('Negative Number')
}

// Voting Eligibility
let age = 19;
if (age >= 18) {
    console.log('Eligible for voting')
} else {
    console.log('not eligible try next time')
} 

// find biggest number 
let num1 = 100;
let num2 = 70;
let num3 = 40;
if (num1 > num2 && num1 > num3) {
    console.log(`num1 is biggest number ${num1}`)
} else if (num2 > num3) {
    console.log(`num2 is biggest number ${num2}`)
} else {
    console.log(`num3 is biggest number ${num3}`)   
}

// Switch Case 
// day name
let dayNum = 7;
switch(dayNum){
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('tell me day number')
}

// simple calculator
let a = 20;
let b = 4;
let operator = '+';
switch (operator){
    case '+':
        console.log(a + b)
    break
    case '-':
        console.log(a - b)
    break
    case '*':
        console.log(a * b)
    break
    case '/':
        console.log(a / b)
    break
    default:
        console.log('insert value')
}


