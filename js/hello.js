"use strict";
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input:first-child");
const loginButton = loginForm.querySelector("input:last-child");
const hello = document.querySelector("#hello");
const clock = document.querySelector("#clock");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/**화면에 Hello username을 띄우는 함수 */
function helloUser(username) {
  hello.innerText = `Hello! ${username}`;
  hello.classList.remove(HIDDEN_CLASSNAME);
}

/**Login 버튼이 눌렸을때 함수 */
function handleLoginFormSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  helloUser(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
  console.log("no login");
} else {
  helloUser(savedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log("login");
}
