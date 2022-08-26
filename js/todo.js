"use strict";
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  //   toDoList.removeChild(e.target.parentElement);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const value = toDoInput.value;
  toDoInput.value = "";
  paintTodo(value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
