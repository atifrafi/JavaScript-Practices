// spread operator 
// ya ek single value ko multiple value ma break kr deta hai
// means ka spread krdeta
// spread operator ...

// spread with function 
let add_function = (a,b,c)=>{
    return a + b + c;
}
// ya ek array ha jisma number hai
let num_array = [2,4,8] // is number array ki value ko spread krka add_function ko denga
console.log(num_array)// agr console krna pora array mila ga ju ka humain nhi chaiya 
// humain bus array ki single single value chaiya islia spread operator use karenga.

// array ki values ko spread karka function de rahe hai
console.log(add_function(...num_array))
// working
// isma ho ya raha hai 
// array pr spread operator lagana se sari value alag alag ho gai
// fir wo values ko function ka argument ka tor pr da di.


// spread with arrays
let arr1 = ['car','bike','plane'];
let arr2 = ['apple','banana','mango']
let combine_both = [...arr1,...arr2]
console.log(combine_both) // is array ma phela du array ko spread krka dal dia 
// jis se dono array combine hogaye


// spread with objects
let obj1 = {
    id:101,
    name:'annie'
}
let obj2 ={
    hobby: 'reading',
    education: 'master'
}
let combine_both_object = {...obj1, ...obj2}
console.log(combine_both_object)
// du object ki values ko spread karka third object ma dal di.
// using spread operator