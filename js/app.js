const loginform = document.querySelector("#login-form")
const loginput = loginform.querySelector("input")
const h1 = document.querySelector("h1")
const HIDDEN_CLASS = "hidden"
const USERNAME = "username"



const checkDB = localStorage.getItem(USERNAME)

function SubmitForm(a){
    a.preventDefault();
    loginform.classList.add(HIDDEN_CLASS);
    const username = loginput.value;
    localStorage.setItem(USERNAME,username);
    paintGreetng();
}

function paintGreetng(){
    const saveDB = localStorage.getItem(USERNAME)
    h1.innerText = `Hello ${saveDB}!!`;
    h1.classList.remove(HIDDEN_CLASS);
}

if(checkDB === null){
    loginform.classList.remove(HIDDEN_CLASS);
    loginform.addEventListener("submit", SubmitForm);
}else{
    paintGreetng()
}



