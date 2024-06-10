function setUsername(username){
    //Some computation 

    this.username = username
    console.log('Username :'+username)
}

function setDetails(username, email, pass){
    //setUsername(username)    //But the EC of setUsername doesnot pass the details to setDetails
    //To avoid this we ecplicitly call the setUsername
    //setUsername.call(username)    //still not working cause The fn doesnot pass the values to setDetails fn EC

    setUsername.call(this,username);

    this.email = email;
    this.pass = pass;
}

const user1 = new setDetails('Nousad','ali@gmail.com','123fdhsi78@jglkd')
console.log(user1)


/*

------------------------------------
|    --------------------------     |
|    |     setUser EC         |     |
|    --------------------------     |
|        (No Link b/w them)         |   
|   ---------------------------     |          gives the all the variable after EC Destroyed  ---v
|   |     setDetails EC       |     |---> This call the setUser if You give them setUser.call(this,username)
|   ---------------------------     |
|                                   |
|                                   |
|           Global EC               |
|-----------------------------------|

*/