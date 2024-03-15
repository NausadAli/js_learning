const num = 343
const myNumb = new Number(123)

// console.log(myNumb)
// console.log(num)

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// console.log(myNumb.toString()) //convert it into String

const hh = 123.8111119      //123.81
// console.log(hh.toFixed(2))  //to precise after the number add 2 decimal points


// console.log(hh.toPrecision(5))  //Starts from 1st number upto 5 o/p -> 123.81
let balance = 123009940
// console.log(balance.toLocaleString('en-IN'))


// ++++++++++++++++++++ MATH +++++++++++++++++++++++++

//Math.ran()  give [0,1) 
// *6   give [0,6) ->0 1 2 3 4 5
//  +1 give [1,7) -> 1 2 3 4 5 6

// range 11- 15
//   *5  [0,5)     -> 0  1  2  3  4 
//   +11 [11,16)   -> 11 12 13 14 15

console.log(Math.floor((Math.random()*5 + 11)))