// Lets talk about JS prototype

myArray = ['Hello','Bro']


Array.prototype.specialPower = function(){
     return "I've special Power"
}
console.log(myArray.specialPower())


//If The Object have a prototype then everyOne can use it cause you know
// Array/String/function ---> Object ---> Null

Object.prototype.specialPowerForAll = function(){
     return "I've special Power that everyOne Can Use it"
}
let str = 'Hello Guggu'

let myObj = {
     name: 'Nousad Ali',
     message : specialPowerForAll()
}

console.log(myObj)

console.log(str+" "+str.specialPowerForAll())