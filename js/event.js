const li = document.querySelector("li");
const button = document.querySelector("button");
const nameText = document.querySelector("h1");

function scrollout(){
    let value = window.scrollY;
    if(value > 100){
        nameText.style.animation ="disappear 1s ease-out forwards"
    }else{
        nameText.style.animation ="slide 1s ease-out"
    }
}

window.addEventListener("scroll",scrollout)