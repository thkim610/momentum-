const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // * JSON.stringfy -> js의 객체나 배열 등 어떤 것이든 string으로 바꿈
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; // newTodo 객체의 텍스트를 span에 넣음
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // li 안에 span을 넣음
  li.appendChild(button); // li 안에 button을 넣음
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault(); // 브라우저의 기본값을 막아줌. 새로고침 방지 2-1-1. 함수 실행
  const newTodo = toDoInput.value; // input읠 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // 랜덤한 id 생성 (텍스트값이 아닌 객체 값을 저장)
  };
  toDos.push(newTodoObj); // 사용자가 입력한 데이터를 저장
  paintToDo(newTodoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); // string을 배열로 바꿈
  parsedToDos.forEach(paintToDo); // forEach 함수는 배열의 요소마다 실행함
}


// .filter -> 지우고 싶은 item을 제외하고 새로운 배열을 만드는 함수