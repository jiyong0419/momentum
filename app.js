const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const hello = document.querySelector("#hello");

const HIDDEN_CLASSNAME = "hidden";

function handleLoginFormSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  hello.classList.remove(HIDDEN_CLASSNAME);
  hello.innerText = `Hello ${username}`;
  /*
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } */
}

loginForm.addEventListener("submit", handleLoginFormSubmit);
