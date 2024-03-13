let myString = "Suraj"                  //String literal
let newString = new String("Suraj")     //string object



// console.log(myString == newString)      //true

// console.log(newString[0])
// console.log(myString[0])

//Access the Prototype

// console.log(newString.__proto__)        //its a object we cant see this in browser console

//Objects.

// console.log(newString.length)   

console.log(newString.toUpperCase())

console.log(newString.charAt(2))
console.log(newString.indexOf('r'))

let str = "hitesh-sc"
console.log(str.substring(3,))
console.log(str.slice(2,7))

// trim- trim down the extraa spaces from start and from end

str= '        hjhfdd      kdfkds\n    '
console.log(str.trim())   

const url = "https://hitesh.com/hitesh%20chaudhry"

console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))
//Covert it into arrays

let newStrr = "hite-sh-code"

console.log(newStrr.split('-'))
