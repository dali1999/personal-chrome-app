const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// list 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// list 삭제
function deleteTodo(event) {
  const li = event.target.parentElement; //삭제하고 싶은 li
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

// html 에 list를 생성해서 보여주기
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌"; //list 삭제
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); // <li> <span></span> </li> 로 만들어주기
  li.appendChild(button); //<span> 다음 <button> 놓기
  toDoList.appendChild(li);
}

// input 에 입력한 value 를 submit 했을 때 기본동작제어 및 저장
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedfToDos = JSON.parse(savedTodos);
  toDos = parsedfToDos;
  parsedfToDos.forEach(paintToDo);
}
