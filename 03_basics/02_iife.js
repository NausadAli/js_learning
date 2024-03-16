//IIFE  - immediatly invoked function expression
    // -- make the code safe from global pollution we want to call the function immetdiatly

// ( for function ) (call)

( function rajjak(name){
    //Named IIFE
    console.log(`Helllo ONE, ${name}`)
})('Nousad');

(()=>{
    console.log(`Two`)
})()