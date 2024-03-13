let score = undefined

// console.log(score)
// console.log(typeof(score))
let conversted = String(score)
// console.log(typeof(conversted))

// console.log(conversted)

//Convertd into Number---  Number(variable_name)
/*
"33" -> (string) -> 33
"33abc" -> (String) -> NaN
undefined -> (undefined) -> NaN
null -> (object) -> 0
true -> (Boolean) -> 1
false -> (Boolean) -> 0
*/

// ---------------------------------------
/*
Converted to Boolean        Boolean(variable_name)

"" ->(String)-> false
"ifAnyThingWritten" -> (String) -> true
1 -> true
0 -> false

*/


// ************ Operations *******************

console.log('1'+2)
console.log(1+'3')
//Above 2 treated as string only

console.log(1+"2"+2)
console.log("1"+2+5+"9")     //if start with string treated as String

console.log(1+2+3+5+"9")    //if start with number treated as Number..

let x = 3
let y = ++x
// let y = x++
console.log(x+" "+y)