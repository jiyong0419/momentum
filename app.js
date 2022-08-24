const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginFormSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  console.log(username);
  /*
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } */
}

loginForm.addEventListener("submit", handleLoginFormSubmit);
