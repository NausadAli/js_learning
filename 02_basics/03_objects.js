const tinederUser = new Object()

tinederUser.id = 1233
tinederUser.name = "Rohit"
tinederUser.age = 22

// console.log(tinederUser)

//Nested Objects

const newUser = {
    email : "userone@google.com",
    fullName : {
        firstName : "Nousad",
        lastName : "Ali",
        Address : {
            road:"station road",
            PO : "Raipur",
            pin : 492001
        }
    }
}

// console.log(newUser.fullName.firstName +" "+newUser.fullName.lastName)

//Sometimes we Add a newUser.fullName.firstName? to confirm that req has firstName or not?

// Add 2 Objects

const obj1 = {1:1,2:2,3:3}
const obj2 = {11:4,22:5,33:6}

// console.log(obj1, obj2)          //Method 1

                    //Method 2

// const obj3 = Object.assign(obj1, obj2)          //The Target object is in obj1..
const obj3 = Object.assign({},obj1, obj2)          //The target object is in {}
// console.log(obj3)
// console.log(obj1)                               //Obj1 is not effected in 2nd method

//Method 3 -----Spread

const objx = {...obj1,...obj2}          //Most Used............

// console.log(objx)


//Array of Object mein result ata hai hmesha..
// const users = [
//     {id:1212,
//     name: "nn"},
//     {

//     },
//     {

//     }
// ]

// users[0].id


                    // Some Methods 

console.log(tinederUser)
console.log(Object.keys(tinederUser))   //It Gives all the keys in [ 'id', 'name', 'age' ] Array Format


console.log(Object.values(tinederUser)) //It Gives Array in return
console.log(Object.entries(tinederUser))


console.log(tinederUser.hasOwnProperty('fullName'))     //Returns true or false..

