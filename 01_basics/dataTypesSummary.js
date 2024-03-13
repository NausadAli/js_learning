// datatypes Based on Memmory Access 2 typess->
// 1. primitive - number, string, boolean, null, undefined, symbol, BigInt
// 2. non-primitive - function, array, object

/*Two Types of memory - 1.Stack (Holds Primitive dataTypes)
                        2.Heap  (Holds NonPrimitive dataTypes)


Stack - its Working done on the copy of the data.
Heap - its Working done on the reference of the data.
*/

// example - STACK - COPY

let numbers = 223
let cpyNumbers = numbers

cpyNumbers = 343
console.log(numbers)
console.log(cpyNumbers)

// One of them Changed because that works on copy of data that stores in the Stack.
// So changes done in the copied data so it doesn't reflect on the original data..

// HEAP - References

let person1 = {
    name: "Nousad Ali",
    email: "nousadali@gmail.com"
}


let person2 = person1

person2.email = "alivenausad@gmail.com"

console.log(person1)
console.log(person2)


//Both of them Changed because that works on reference of data that stores in the Heap.
// So changes done in the original data..