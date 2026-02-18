let prom=new Promise((resolve,reject)=>{
    let ans = 12+12;
    if(ans==25){
        resolve("Resolved...!!")
    }else{
        reject("Rejectedd......$$")
    }
})

prom.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})