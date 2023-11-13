const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username)
    // greeting.innerText = "Hello " + username;
};

function paintGreeting(username){
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    // show the greeeting
    paintGreeting(savedUsername);
}



const loginInputElement = document.getElementById('login-input');
        
loginInputElement.addEventListener('click', function(event) {
    this.placeholder = '';
    event.stopPropagation(); 
});

document.addEventListener('click', function() {
    loginInputElement.placeholder = "what is your name?";
});






const toDoinputElement = document.getElementById('todo-input');
        
toDoinputElement.addEventListener('click', function(event) {
    this.placeholder = '';
    event.stopPropagation(); 
});

document.addEventListener('click', function() {
    toDoinputElement.placeholder = "Please write your main task";
});


