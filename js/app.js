let background = document.querySelector("body");
let container = document.querySelector(".container");
let card = document.querySelector(".container1");
let input = document.querySelector("#taskin");

document.addEventListener("click", movingBg);
input.addEventListener("click" , movingBg);
window.addEventListener("load" , loader());

function movingBg(){
    if(input === document.activeElement){
        background.style.backgroundSize = "200%";
        background.style.backdropFilter = "blur(5rem)";
        container.style.top = "-34vh";
        card.style.bottom = "1vh";
        console.log("focused");
    }else{
        background.style.backgroundSize = "100%";
        background.style.backdropFilter = "blur(0)";
        container.style.top = "0%";
        card.style.bottom = "-100%";
        console.log("not focused");
    }
}

function loader(){
    document.appendChild(document.querySelector(".loadingScreen"));
}

