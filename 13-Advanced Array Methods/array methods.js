// array methods

// map 
// important point map technicaly loop chalata hai. lakin 
// iska main maqsad array ka loop chalana nhi hota.
// ya array ko transform karka naya array banana hota hai.
let arr=[2,4,6,8,10]

let transformArray = arr.map((x)=>{
    return x * 2
})

console.log(transformArray)

// map ka naye array pr loop 
// for each method
let looping = transformArray.forEach((num)=>{
    console.log(num)
})



// filter 
// ya new array return karta hai 
let carBrands = ['Mercedes','volks wagon','lamborgheni', 'ferrari', 'porche', 'koenigsegg','BMW','toyota','hundayi','baleno']
// filter by alphbets
let filterByAlpha = carBrands.filter((brandnames)=>{
    return brandnames.toLowerCase().startsWith('b');
})
console.log(filterByAlpha)



// reduce 
// reduce bhi naya array return karta hai
// reduce ka matlab kam karna nhi ya pora array ko compress karka 
// single value deta hai
let arr2=[1,2,3,4]
let result = arr2.reduce((acc,curr)=>{
    return acc + curr
},0)

console.log(result ,'result')

// working 
/*
acc = 0  + curr = 1 total is 1
acc = 1  + curr = 2 total is 3
acc = 3  + curr = 3 total is 6
acc = 6  + curr = 4 total is 10
*/

// other example with string
let arr3 = ['h','i','e','g']
let resultarr3 = arr3.reduce((acc,curr)=>{
    return acc + curr
},"")

console.log(resultarr3 ,'result')


sdjfkjdsf