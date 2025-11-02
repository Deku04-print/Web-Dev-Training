// function add(num1,num2){
//     return num1+num2;
// }
// function sub(num2,num1){
//     return num2-num1;
// }
// function mul(num1,num2){
//     return num1*num2;
// }
// function div(num1,num2){
//     return num1/num2;
// }




// function faultCal(char,num1,num2){
//     const isFault =Math.random()<0.1;

//     if(isFault){
//         console.log("Alert...!! Faulty calculator Triggered.....!!")
//         if(char=="+") return sub(num1,num2);
//         else if(char=="-") return add(num1,num2);
//         else if(char=="*") return div(num1,num2);
//         else if(char=="/") return mul(num1,num2);
//         else console.log("Invalid operation");
//     }else{
//         if(char=="+") return add(num1,num2);
//         else if(char=="-") return sub(num1,num2);
//         else if(char=="*") return mul(num1,num2);
//         else if(char=="/") return div(num1,num2);
//         else console.log("Invalid operation");
//     }

// }

// const res1=faultCal("-",12,32)

// console.log(res1)

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function faultCal(op, num1, num2) {
  const isFault = Math.random() < 0.1;

  if (isFault) {
    console.log("⚠️ Alert! Faulty calculator triggered!");
    if (op === "+") return sub(num1, num2);
    else if (op === "-") return add(num1, num2);
    else if (op === "*") return div(num1, num2);
    else if (op === "/") return mul(num1, num2);
    else return "Invalid operation!";
  } else {
    if (op === "+") return add(num1, num2);
    else if (op === "-") return sub(num1, num2);
    else if (op === "*") return mul(num1, num2);
    else if (op === "/") return div(num1, num2);
    else return "Invalid operation!";
  }
}

const res1 = faultCal("-", 12, 32);
console.log("Result:", res1);
