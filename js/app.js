let background = document.querySelector("body");
let container = document.querySelector(".container");
let card = document.querySelector(".container1");

function moving_bg(){
    background.style.backgroundSize = "150%";
    background.style.backdropFilter = "blur(1rem)";
    container.style.top = "-130%";
    card.style.bottom = "1%";
    
}