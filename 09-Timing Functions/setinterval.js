// setInterval Function
// - har fixed time ke baad repeat hota rehta hai

// practical
let count = 1;
console.log('started');

let intervalID = setInterval(()=>{
    console.log(count);
    if (count === 5){
        clearInterval(intervalID)
        console.log('stopped')
    }
    count++;
},2000)

console.log(intervalID)