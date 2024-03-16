// console.log(this)                //empty Object


function this_Function(){
    const hh = "Hello"

    console.log(this)               //reference object Global
    console.log(hh.this)            //undefined
}
// this_Function()

const varii = function(){

    return this
}
// console.log(varii())


// WE Cant use this in functions

const user = {
    userName : "Nousad",
    price : 999,
    greet : function(){
        console.log(`hey ${this.userName}, Welcome to our websitee`)        //this uses the current context
    }
}

// user.greet()
user.userName = "Hitesh Sir"    //now its refers to the new user name
// user.greet()


function thissss(){
    console.log(this);
}
// thissss()
const abusjs = () =>{
    console.log(this)
}
// abusjs()     //Global empty obj


///////////////////////////ARROW FUNCTION////////////////////////////

// const abcd = (a,b) =>{
//     return a+b
// }


//----------Implicit Retunrn-----------yaha return likhna nhi hota hai..() lagana Hota hai..
// const abcd = (a,b) => a+b
const abcd = (a,b) => (a+b)


// !important -----------
const callObje =() => ({name:"Nisha"})                   //if no () -> undefined

console.log(callObje())
console.log(abcd(3,4))
