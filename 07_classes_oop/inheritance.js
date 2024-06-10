class User {
     constructor(username) {
          this.username = username;
     }

     findUser() {
          return this.username
     }
}

class Teacher extends User {
     constructor(username, email, password) {
          super(username)     //Same as fn.call(this, Username)
          this.email = email;
          this.password = password
     }

     addCourse() {
          return 'A new Course is Added'
     }
     static didNotAccessed() {
          console.log("You can't access this part")
     }
}


const teach1 = new Teacher('Aftab Ali', 'amiAftab@gmail.com', '394895u000');

console.log(teach1.findUser())
// teach1.didNotAccessed()//You can't accesss this This Gives Error

const tea = new User('Hello');
// console.log(tea.addCourse())       //This gives error 

console.log(teach1 instanceof User)