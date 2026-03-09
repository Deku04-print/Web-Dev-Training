// let harsh ={
//     name:"Harsh D",
//     id:1,
//     eats:true
// }
// let random ={
//     name:"random D",
//     id:2
// }

// random.__proto__=harsh

// console.log(random.eats)


class Animal{
    constructor(name) {
        this.name = name
        console.log("Object is created....!")
        
    }

    eats(){
        console.log("I am eating")

    }

    jumps(){
        console.log("Jumping jumping")
    }
    
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Animal constructor got called")

    }

    eats(){
        console.log("Roarrrr")
    }

}

let a=new Animal("bunny");
let b=new Animal("cat");

let c=new Lion("Lion");

console.log(a.name)
console.log(b.name)
console.log(c)
console.log(c.eats)
