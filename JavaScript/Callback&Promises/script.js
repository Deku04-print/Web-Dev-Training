// console.log("Hello i am the first log")
// console.log("Hello i am the second log")

// setTimeout(()=>{
//     console.log("Hello i am inside set timeout fun")
// },2)

// console.log("Now i am the last process")


//function to print result in the H1 tag 


//initializing elements

const btn = document.getElementById("cli");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function sum(callback,num1,num2){

  let result = num1+num2;
  callback(result);

}
btn.addEventListener("click",function(){

  let value1 = Number(num1.value);
  let value2 = Number(num2.value);
   sum(Display, value1, value2);

})

function Display(res){
    document.getElementById("res").innerHTML = res;


}
