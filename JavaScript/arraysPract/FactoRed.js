
function factorial(num){
    let fact=1;
    if(num<0){
      return "Factorial is not defined for negative numbers.";  
    } 
    if(num===0 || num===1){
        return 1;

    }
    for(let i=num;i>=1;i--){
        fact*=i;
    }

    return fact;

}

console.log(factorial(6));

