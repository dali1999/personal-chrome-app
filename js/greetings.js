const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //기본적인 작동 통제
  loginForm.classList.add(HIDDEN_CLASSNAME); //로그인폼을 보이지 않게 함
  const username = loginInput.value; //username 변수 생성
  localStorage.setItem(USERNAME_KEY, username); //username 에 데이터 저장
  paintGreetings(); //h1 보이게 함
}

function paintGreetings() {
  const username = localStorage.getItem("username");
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show greeting
  paintGreetings();
}


