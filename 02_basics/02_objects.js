//Singleton object
// Object.create....

//object litreals
let sym = Symbol('Key1')
let user1 = {
    name: "Nousad",
    "full name":"Nousad Ali",
    [sym]:"UserKey",
    age: 22,
    logInDays:['Tuesday','Friday']
}

// console.log(user1[sym])     //Access The Symbol
// console.log(user1.name)
// console.log(user1)
// console.log(user1["full name"])     //Acess if we give Space in key
// user1['full name'] = "Nabin Reddy"
// console.log(user1["full name"])
// //We Can freeze our values in an Objects..
// Object.freeze(user1)                //After Freezing the Object We Can't AMke Changes into it..

//After freez
// Object.freeze(user1.age)
// user1.age = 44

// user1['full name'] = "Hitesh Choudhry"
// console.log(user1)


user1.greetings = function(){
    console.log(`Hello My JS User Welcome`)
}
user1.greetWithName = function(){
    console.log(`Hi ! ${this["full name"]} welcome in ${user1.age} JS tutorial`)
}
console.log(user1.greetWithName())
console.log(user1.greetings())
// console.log(user1)

//++++++++++++++ 2nd PART+++++++++++++++++++++++++++



