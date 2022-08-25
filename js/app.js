const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const hello = document.querySelector("#hello");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/**화면에 Hello username을 띄우는 함수 */
function helloUser(username) {
  hello.innerText = `Hello ${username}`;
  hello.classList.remove(HIDDEN_CLASSNAME);
}

/**Login 버튼이 눌렸을때 함수 */
function handleLoginFormSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  helloUser(username);
  /*
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } */
}
const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
} else {
  helloUser(savedUsername);
}
