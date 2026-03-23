
/*What is an IIFE in JavaScript?

IIFE stands for Immediately Invoked Function Expression.

It is a function that runs immediately after it is created.*/
async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
}

function sum(a,b,c,d){
    return a+b+c+d

}

(async function main(){ 
// let a =await sleep()
// console.log(a)
// let b= await sleep()
// console.log(b)


let [x,y,z,...rest]=[1,5,6,7,8,9,10]
console.log(x,y,z)
console.log(rest)

// let obj={
//     a:1,
//     b:2,
//     c:3

// }

// let {a,b} = obj
// console.log(a,b)

let arr=[1,4,6,4]
console.log(sum(arr[0],arr[1],arr[2],arr[3]))
console.log(sum(...arr))

})()


