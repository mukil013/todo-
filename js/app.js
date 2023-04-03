//variables
let background = document.querySelector("body");
let container = document.querySelector(".container");
let card = document.querySelector(".container1");
let input = document.querySelector("#taskin");
let addbtn = document.querySelector("#addbtn");
let list = document.querySelector(".empty");

//Event listeners
input.addEventListener("click" , movingBg);
addbtn.addEventListener("click", listform);

//functions
function listform(){
    let todo = document.createElement("div");
    todo.classList.add('todo');
    let todolist = document.createElement('li');
    todolist.textContent = input;

    todolist.textContent = input.value;
    todolist.classList.add("todolistvars");
    let temp = document.querySelector(".todolistvars");
    let btncls = document.createElement('div');
    btncls.classList.add('btncls');
    let check = document.createElement("button");
    check.classList.add('check');
    check.textContent = "Completed"; 
    let remove = document.createElement("button");
    remove.classList.add('trash');
    remove.textContent = "Delete";

    btncls.appendChild(check);
    btncls.appendChild(remove);
    todolist.appendChild(btncls);
    todo.appendChild(todolist);
    list.appendChild(todo);

    remove.addEventListener("click", () => {
        console.log("delete clicked");
        todo.classList.add('scale');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    });
    check.addEventListener("click", () => {
        console.log("check clicked");
        todolist.style.textDecoration = "line-through";
        todolist.style.opacity = ".5";
    });

    input.value = "";
}

function movingBg(){
    if(input === document.activeElement){
        background.style.backgroundSize = "150%";
        background.style.backdropFilter = "blur(2rem)";
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



