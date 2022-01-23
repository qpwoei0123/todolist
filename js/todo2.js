const todoform2 = document.querySelector("#todo-formmk2");
const todolist2 = document.querySelector("#todo-listmk2");
const todoInput2 = document.querySelector("#todo-formmk2 input")
let toDos2 = [];
const toDos_key2 = "toDos2";


//로컬스토리지에 현재상태 저장
function savetodo2(){
    localStorage.setItem(toDos_key2, JSON.stringify(toDos2))
}

//버튼클릭시 li제거, filter사용해서 리스트에서 삭제 후 저장
function DelTodo2(event){
    const li = event.target.parentElement
    li.remove();
    toDos2 = toDos2.filter((todo2) => todo2.id !== parseInt(li.id));
    savetodo2();
}

function DoneTodo2(event){
    const li = event.target.parentElement
    li.style ="text-decoration:line-through;"
    event.target.remove();
    toDos2.forEach((a) => {
        if(a.id == li.id){
            a.done = true;
        }
    })
    savetodo2();
}



//제출하면 새로고칭 막고 painttodo하고 리스트에 push후 저장 
function todosubmit2(event){
    event.preventDefault();
    const newTodo = todoInput2.value;
    const newTodoOBJ = {
        text: newTodo,
        id: Date.now(),
        done: false
    }
    todoInput2.value = ""
    paintToDo2(newTodoOBJ)
    toDos2.push(newTodoOBJ)
    savetodo2();
}

//  todo리스트 생성 
function paintToDo2(newtext2){ 
    const listcolors =[
        "red",
        "blue",
        "yellow",
        "green",
        "gold",
        "orange",
        "purple"
    ]
    const randcolor = Math.floor(Math.random()*listcolors.length)
    const li = document.createElement("li");
    const span = document.createElement("span")
    const button1 = document.createElement("button");
    const button2 = document.createElement("button")
    li.appendChild(span)
    li.appendChild(button1)
    li.appendChild(button2)
    todolist2.appendChild(li);
    button1.innerText = "X"
    button2.innerText = "V"
    button1.style ="color: red"
    button2.style ="color: green"
    li.style = `border-color:${listcolors[randcolor]}`
    li.id = newtext2.id;
    span.innerText = newtext2.text;
    button1.addEventListener("click",DelTodo2);
    button2.addEventListener("click",DoneTodo2);

    if(newtext2.done == true){
        span.style="text-decoration:line-through;"
        button2.remove();
    }

    //시간에 따른 초기화 구현/ 실패ㅠㅠ
    //const clock = document.querySelector("#clock p");
    //const clock_now_num = parseInt(clock.innerHTML.replace(/:/g,''))
    //if(10640 < clock_now_num){
    //    newtext.done = false;
    //}
}



todoform2.addEventListener("submit",todosubmit2);
const saveToDos2 = localStorage.getItem(toDos_key2);

//로컬스토리지 유무 판단 
if(saveToDos2 !== null){
    const parsedTodos2 = JSON.parse(saveToDos2);
    toDos2 = parsedTodos2;
    parsedTodos2.forEach(paintToDo2);
}else{
    console.log("im empty!")
}