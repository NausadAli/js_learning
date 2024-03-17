// for of loop
const arr = [1,22,44,55,2,77]

for (const val of arr) {
    // console.log(val)
}

const str = "Hello Nousad"

for (const iterator of str) {
    // console.log(iterator)
}

const obj1 = {
    name:"Nousad",
    age : 23
}

// for (const key of obj1) {        //Objects are not iterable in for of loop
//     console.log(obj)
// }
//////////////////map ds///////////////////////

const mpp = new Map()

mpp.set(1,'India')
mpp.set(2,'Germny')
mpp.set(3,'China')
mpp.set(4,'Japan')
mpp.set(4,'USA')

for (const [key,val] of mpp) {
    // console.log(key)
    // console.log(val)
    // console.log(`${key} :- ${val}`)

}

// for in loop
// for (const key in mpp) {    //for in Loop not itrable in Map
//     console.log(key)
// }

const arr1 = [1,22,33,22,444,5,88]

for (const key in arr1) {
    // console.log(key)         //it prints only the key 0,1,2,3...
    // console.log(arr1[key])      //it prints the values..
}


for (const val in obj1){
    // console.log(`${val} is ${obj1[val]}`)
}
// forEach in Array

const myArray = [12,55,57,78,90,8]

myArray.forEach((val, idx, myArray)=>{
    // console.log(`${val}--${idx} -->${arr}`)

    // we can Access only values alsooo
    // console.log(val)
})

function printVal(val){
    console.log(val)
}

const strArr = ['h','r','i','t','i','c','k']
// strArr.forEach(printVal)


// What if the Server send you data in Array of Objects then u neeed to find each element
const retArr = [
    {
        name:'Nousad Ali',
        age : 23
    },
    {
        name:'Aftab Ali',
        age : 17
    },
    {
        name:'Suraj',
        age : 24
    }
]

retArr.forEach((items)=>{
    console.log(` items details - ${items.name}\n\t\t ${items.age}`)
})


//Cautionss....................!!!!!!!!!!!!!!!!!!!!!!!!!!

let val = strArr.forEach( (v)=>{
    return 1
})
console.log(val);           //It returns undefined