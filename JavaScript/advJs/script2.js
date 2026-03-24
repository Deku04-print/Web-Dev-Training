
// sum of even numbers in array

/* let arr=[3,2,5,6,4,6,7,2]
let sum=0;

for (const num of arr){
    
        if(num%2==0){
        sum+=num;
    
    }
    
}
console.log(sum) */

//Reversed string 

/*let string1="Harsh"

let newstr=''
for(let char=string1.length-1;char>=0;char--){
    newstr+=string1[char]

}
console.log(newstr) */


function addLocalNote(note){
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes(){
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let list = document.querySelector(".note");

    list.innerHTML = "";

    for(let n of notes){
        list.innerHTML += `<li>${n}</li>`;
    }
}

document.querySelector("button").addEventListener("click",()=>{
    let note = prompt("Enter your note");

    if(note){
        addLocalNote(note);
        displayNotes();
    }
});

displayNotes();