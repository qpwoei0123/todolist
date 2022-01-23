const todoform = document.querySelector("#todo-form");
const todolist = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input")
let toDos = [];
const toDos_key = "toDos";
const saveToDos = localStorage.getItem(toDos_key);
todoform.addEventListener("submit",todosubmit);

//로컬스토리지에 현재상태 저장
function savetodo(){
    localStorage.setItem(toDos_key, JSON.stringify(toDos))
}

//버튼클릭시 li제거, filter사용해서 리스트에서 삭제 후 저장
function DelTodo(event){
    const li = event.target.parentElement
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    savetodo();
}

function DoneTodo(event){
    const li = event.target.parentElement
    li.style ="text-decoration:line-through;"
    event.target.remove();
    toDos.forEach((a) => {
        if(a.id == li.id){
            a.done = true;
        }
    })
    savetodo();
}

//제출하면 새로고칭 막고 painttodo하고 리스트에 push후 저장 
function todosubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoOBJ = {
        text: newTodo,
        id: Date.now(),
        done: false
    }
    todoInput.value = ""
    paintToDo(newTodoOBJ)
    toDos.push(newTodoOBJ)
    savetodo();
}

//  todo리스트 생성 
function paintToDo(newtext){ 
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
    todolist.appendChild(li);
    button1.innerText = "X"
    button2.innerText = "V"
    button1.style ="color: red"
    button2.style ="color: green"
    li.style = `border-color:${listcolors[randcolor]}`
    li.id = newtext.id;
    span.innerText = newtext.text;
    button1.addEventListener("click",DelTodo);
    button2.addEventListener("click",DoneTodo);

    if(newtext.done == true){
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




//로컬스토리지 유무 판단 
if(saveToDos !== null){
    const parsedTodos = JSON.parse(saveToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}else{
    console.log("im empty!")
}