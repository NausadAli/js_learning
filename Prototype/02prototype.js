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

//Inheritance...


const Teacher = {
     makeVideo : true
}

const TeacherAssistent = {
     isAvailable: false
}

const TASuppot = {
     makeAssignment : 'JS Assignment',
     fullTime: true,
     __proto__:  Teacher
}

const User ={
     username: 'chai',
     email: 'chai@gmail.com'
}
Teacher.__proto__ = User


//Old Code---> __proto__
//They Inherit the Other Objects Prop...
console.log(Teacher.email)      //Dekh rha hai Vinod Access Kainse Kar rha hai

//Modern Syntaxx..

const newUser ={
     studentName: 'Vinood'
}

const mathTeacher = {
     teacherName: 'Pradip',
     time: '8pm'
}


Object.setPrototypeOf(newUser, mathTeacher)  //This Is The Modern Syntax

console.log(newUser.teacherName +" is the Teacher") 



// Q. 

let userNAme = "Nousad ALiii     "

String.prototype.trueLength = function(){
     console.log(this)

     return this.trim().length
}

console.log("Hitesh   ".trueLength())
console.log(userNAme.trueLength())