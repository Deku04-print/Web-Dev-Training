//Promises in js

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        let walkDo=true;

        if(walkDo){
            resolve("Happy happyy happyyy");
        }else{
            reject("Dog Rejectedd you");
        }        
        },1500);
    });
}

function kitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        let doneKi=true;

        if(doneKi){
            resolve("Kitchen Done....!!Happy happyy happyyy");
        }else{
            reject("kitchen not done");
        }        
        },3500);
    });
}

function takeTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        let takeTra=true;

        if(takeTra){
            resolve("Trash Done....!!Happy happyy happyyy");
        }else{
            reject("Go complete the incomplete....");
        }        
        },4500);
    });
}

walkDog().then(value=>{console.log(value); return kitchen()})
        .then(value=>{console.log(value); return takeTrash()})
        .then(value=>{console.log(value); console.log("Finisheddd....")})
        .catch(error=>console.log(error));        