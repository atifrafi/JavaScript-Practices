// loops

// 1-for loop 
for (let i=1; i<10; i++){
    let num = 2
    console.log(`2 * ${i} = ${ num * i }`)
}
// nested for loop 
for (let i=1; i<5; i++){
    console.log('outer loop',i)
    for(let j=1; j<3; j++){
        console.log('inner loop',j)
    }
}
// pata ho ka loop kaha tak chalana ha 
// -----------------------

// 2-while loop
let i = 1;
while(i<=10){
    console.log('hello while')
    i++
}
// pata nhi ha kaha tak loop chalana ha
// -----------------------






// 3-do while loop
let u=1
do{
    console.log('one time lazmi')
    u++
}while(u<10)

// jab lazmi ek bar loop chalana hi ho
// -----------------------