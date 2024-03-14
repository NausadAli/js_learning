let myDate = new Date()
// console.log(myDate)    
// // console.log(myDate.toDateString())
// // console.log(myDate.toJSON())       //Convert default to String
// // console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())    //This Give the Date 
// console.log(myDate.toLocaleString())    //This give Date and Time

// console.log(myDate.toLocaleTimeString())    //Only Time

// console.log(myDate.toString())  //default to a meaningful string
// console.log(myDate.toTimeString())  //only time String

// console.log(myDate.toUTCString());

// console.log(typeof (myDate))


//Customized Dates.....................................
// let myCreatedDate = new Date(2024,11,31)

// let myCreatedDate = new Date(2024,11,31,23,49,38)
//Date is 2024/12/31 time 11:49:38 PM
//11 it starts with 0

//Another One but 12 means Dec here
// let myCreatedDate = new Date("2024/12/31 12:23:34")


// console.log(myCreatedDate.toLocaleString())


// TimeStamps======================

// let myStamp = Date.now()
// console.log(myStamp)        //Miliseconds from Start..
// console.log(myCreatedDate.getTime())    //milisecond from 2024/12/31 12:23:34 time

//Now We Can Find out Hoe much Time Did They Take for solving a MCQ

// make It Into Secondes...myCreatedDate.getTime()

// console.log((myCreatedDate.getTime()/1000))



let newDate = new Date()
console.log(newDate.getFullYear())  
console.log(newDate.getMonth())
console.log(newDate.getDate())

// Now we Can Print out day as we want in a order



// It's is Important
console.log(newDate.toLocaleString('default', {
    // weekday:"long",
    dateStyle:"full"

    //There are So Many Methods in toLocaleString
}));