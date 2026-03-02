const btnEl = document.querySelector("#btn")

const clickHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>
        res.json()
    ).then(data=>{
        console.log(data)
    }).catch(err =>{
        console.log("Error : ",err)
    })
}


btnEl.addEventListener("click",clickHandler)