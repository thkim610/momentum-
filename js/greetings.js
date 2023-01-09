const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault(); // 브라우저의 기본값을 막아줌. 새로고침 방지 2-1-1. 함수 실행
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // 정보(username)를 저장
  paintGreeting(username);
} 

function paintGreeting(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 1. 정보가 있는지 확인

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);     //2-1. 정보가 없을 때
  loginForm.addEventListener("submit", onLoginSubmit); //폼 보여주기
} else{
  paintGreeting(savedUsername); //2-2. 정보가 있을때,  greeting 보여주기 
}
