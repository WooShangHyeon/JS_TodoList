const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onlogSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintingGreeting(username);
    
    
}

function paintingGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    const todo = document.querySelector("#todo-form");
    todo.classList.remove(HIDDEN_CLASSNAME);

    const todolist = document.querySelector(".container_under");
    todolist.classList.remove(HIDDEN_CLASSNAME);

    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onlogSubmit);
} else {
    paintingGreeting(savedUsername);
}