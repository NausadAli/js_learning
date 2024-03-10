//3 types of Variables..
// const wherea everyThing is Constant and we can't Update it

const accountId = 3423232 //Not Changeable
let accountName = "Nousad Ali" //changeAble
// var accountCity - Don't use the var in JavaScript it has problems with Block Scopes and Functional Scope


accountCity = 'Jaipur' // not a GOOD approach. Changeable

//If we can't assign value to a variable then it returns //undefined
let phnNo;

console.log(accountId);
// accountId = 9090
// Console.table - here we can write all the output in one place a
console.table([accountId, accountName, accountCity])
accountCity = 'Kolkata'
accountName = "Parul Mohapatra"
console.table([accountId, accountName, accountCity, phnNo])

