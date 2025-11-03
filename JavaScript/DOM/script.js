// Select all boxes
const boxes = document.querySelectorAll('.box');

// Function to generate a random color in HEX format
function getRandomColor(){
    const char= '0123456789ABCDEF';
    let color='#';
    for(let i =0;i<6;i++){
        color+=char[Math.floor(Math.random()*16)];
    }
    return color;
}

boxes.forEach(box=>{
    const colorr=getRandomColor();
    const bgg=getRandomColor();

    box.style.color=colorr;
    box.style.backgroundColor=bgg;
});