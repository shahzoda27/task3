let width = document.getElementById("width");
let height = document.getElementById("height");
let radius = document.getElementById("radius");
let color = document.getElementById("color");
let box = document.getElementById("box");
let button = document.getElementById("button");

button.addEventListener("click", ()=>{
    box.style.width = width.value + "px"
    box.style.height = height.value + "px"
    box.style.borderRadius = radius.value + "px"
    box.style.backgroundColor = color.value 
});



