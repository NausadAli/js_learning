let strArr = ['d','i','j','e']
let val = strArr.forEach( (v)=>{
    return 1
})
// console.log(val);           //It returns undefined

// so Devlopers comes with 3 new Things that returns something..
// 1.filter
// 2.map
// 3.reduce

let myArr = [6,7,5,4,66,44,89]


let re;

re = myArr.filter( (val) =>{         //Explicite Return..
    return val>5
} )

    //Implicite return

re = myArr.filter( (val) => val>5 )     

re = myArr.filter( (val) => (val>5) )

// console.log(re)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
]

let results

//find book with genre 'History'
results = books.filter( (book)=> book.genre === 'History')

//Books that are published after 1995

results = books.filter((book)=>{
    return book.publish > 1995
})

// Books that are published after 1995 and genre 'History'

results = books.filter ((book)=>{
    return book.genre === 'History' && book.publish > 1995
})


// console.log(results)


let myNumbers = [1,2,3,4,5,6,7,8,9,10]

// let myResult = myNumbers.map( (ele)=> ele+10 )
// console.log(myResult);

//Chainings -------------------------------------->

let myChain = myNumbers
                .filter( (el) => el > 2)
                .map( (ele) => ele+10 )
                .filter( (ele) => ele > 16 )

// console.log(myChain);


// reduce //mainly used to add the cart value..
    // obj.reduce((accumlator, item) =>{
            // return accumlator + item
    //  }, initialAccumlator=0)



let myCart = [120,450,899,80]

let priceToPay = myCart.reduce((acc,item)=>{
    return acc+item
},0)
// console.log(priceToPay)



// Another Example..

const myCart1 = [
    {
        itemName: 'Choclate',
        price: 129
    },
    {
        itemName: 'Kaju Katli',
        price: 439
    },
    {
        itemName: 'Lee Cooper Jeans',
        price: 999
    },
    {
        itemName: 'Snitch shirt',
        price: 1199
    }
]

const toPay = myCart1.reduce( (acc,item)=> acc + item.price, 0)
console.log(toPay);

