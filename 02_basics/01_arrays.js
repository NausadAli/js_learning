const myArr = new Array(1,2,3,45,67)
// console.log(myArr);

// (myArr.push(5))
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(90)
// console.log(myArr)  //[ 90, 1, 2, 3, 45, 67 ] add items at 0th index and shift all the element

// myArr.shift()       //[ 1, 2, 3, 45, 67 ]
// console.log(myArr)

// console.log("0 ->",myArr);

// console.log(myArr.slice(1,3))
// console.log("a ->",myArr);

// console.log(myArr.splice(1,3))
// console.log("b ->",myArr);

// -----------------------------Second Part----------------------------

const marvel_heros = ["Thor","SpiderMan","Dr Strange"]
const dc_heros = ["BatMan","Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

//How To add This Two

// Method 1---- Concat

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//Method 2----- Spread Operator

const spread_allHeros = [...marvel_heros, ...dc_heros,1]
// console.log(spread_allHeros);

//Flat a Arrayy

const complx_arr = [12,33,5,6,[2,4,5],[1,2],[12,23,[1,2,3,4]]]

// console.log(complx_arr)

const simple_arr = complx_arr.flat(Infinity)
// console.log(simple_arr)




console.log(Array.isArray(simple_arr))
console.log(Array.isArray("Nousad"))

console.log(Array.from("NousadAli"))        //Make It a Array...

console.log(Array.from({                    //We Have to Specify To which one to make as array key/value
    name:'Nousad',
    age : 23
}))

//If .from can't make an array then it convert it into []

console.log(Array.of(100,2,400,898))        //Make an Array with set of elements