"use strict";
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const hello = document.querySelector("#hello");
const clock = document.querySelector("#clock");

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
}

/** 현재시간을 출력해주는 함수 */
function getClock() {
  const date = new Date();
  const getHours = String(date.getHours()).padStart(2, "0");
  const getMinutes = String(date.getMinutes()).padStart(2, "0");
  const getSeconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${getHours}:${getMinutes}:${getSeconds}`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
} else {
  helloUser(savedUsername);
}

getClock();
setInterval(getClock, 1000);
