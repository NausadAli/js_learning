//Now the Class is nothing but a syntactical sugar

class User{
    constructor(username, email, password){
         this.username = username,
         this.email = email,
         this.password = password
    }

    changePassword(newpassword){
         return this.password = newpassword
    }
}

const user1 = new User('nousad','nousad.edu@gmail.com','123')
user1.changePassword('567656')
console.log(user1)


//In previous versions before ES6

function prevUser(username, email, password){
    this.username = username
    this.email = email
    this.password = password

}

prevUser.prototype.changePrevPassword = function(pass){
    console.log('prevPass : '+this.password)
    console.log('Password Updated to : '+pass)
    return this.password = pass
}

const user2 = new prevUser('Nousad','nousadali.official@gmail.com','1233')
user2.changePrevPassword('this_isMyNewPassWord')
console.log(user2)

