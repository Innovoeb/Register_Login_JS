// declare event handlers for form submits
const userLogin = document.getElementById('login')
const registerUser = document.getElementById('register')

// user login event handler
userLogin.addEventListener('submit', event => {
    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('password').value;

    // prevent form submit
    event.preventDefault();
    
    // request options for API call
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    // fetch and promises
    fetch("http://localhost:3000/users", requestOptions)
    .then((resp) => resp.json())
    .then(function(data) {
        
        // for every element in the users array, loop through and match the usernames and inputs
        for(i = 0; i < data.length; i++)
        {
            if(usernameInput == data[i].username && passwordInput == data[i].password) {
            console.log(usernameInput + " is logged in")
            return // return to stop the function when username and password matches
            }
        }
        console.log("Incorrect Username or Password");
    })
    .catch((error) => console.log(error))
})

// user registry event handler
registerUser.addEventListener('submit', event => {
    let usernameInput = document.getElementById('enter-username').value;
    let passwordInput = document.getElementById('enter-password').value;

    event.preventDefault();

    var requestOptions = {
        method: 'POST',
        // send JSON data in POST body
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        // turn the POST body into strings
        body:JSON.stringify({
            username:usernameInput,
            password:passwordInput
        }), 
        redirect: 'follow'
    };

    fetch("http://localhost:3000/users", requestOptions)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

})

// test script to retrieve 'users' array from db.json
const getUsers = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:3000/users", requestOptions)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
     
    //////////// Fetch Without Arrow Functions ////////////////
//     fetch("http://localhost:3000/users", requestOptions)
//     .then(function(resp) {
//         return resp.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     }) 
//     .catch(error => console.log('error', error));
}