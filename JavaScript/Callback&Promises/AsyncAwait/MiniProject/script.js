const btnEl = document.querySelector("#btn")
const print = document.querySelector(".pri")
const newUser={
    name:'john',
    job:'carpenter'
}

const clickHandler =async () => {

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        const data = await res.json();

        if(!res.ok){
            console.log(data.description);
            return
        }
        console.log(data)

    }catch(error){
        console.log(error)
    }


    // try{

    //     const res=await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data =await res.json();
    //     console.log(data[0].name)
    //         print.innerText=data[0].name


    // }catch(error){
    //     console.log("Error : ",err)
    // }
        





    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res =>
    //     res.json()
    // ).then(data=>{
    //     console.log(data)
    // }).catch(err =>{
    //     console.log("Error : ",err)
    // })
}


btnEl.addEventListener("click",clickHandler)