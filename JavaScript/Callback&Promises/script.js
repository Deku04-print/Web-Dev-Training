// console.log("Hello i am the first log")
// console.log("Hello i am the second log")

// setTimeout(()=>{
//     console.log("Hello i am inside set timeout fun")
// },2)

// console.log("Now i am the last process")


function greetings(username) {
  alert('Welcome ' + username);
}
//the function declaration above is to be passed into the function below thereby making it a callback function.

function saveUserName(callback) {
  var name = prompt('Please enter your username.');
  callback(username);
}
//the above function states the callback function as a parameter

saveUserName(greetings);