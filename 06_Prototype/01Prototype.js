function myFun(num){
    return num*5;
}

myFun.power=2
console.log(myFun(5))
console.log(myFun.power)
console.log(myFun.prototype)


function createUser(username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.incrementScore = function(){
  return ++this.score
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser('chai',25)
const tea = createUser('tea',250)

console.log(chai.incrementScore())
chai.printMe()