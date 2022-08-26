"use strict";
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const toDos = [];

/**입력받은 Todo를 localStorage에 저장 */
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  //   toDoList.removeChild(e.target.parentElement);
}

/**Todo가 submit되었을때 Todo리스트에 li추가 */
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
  toDos.push(value);
  paintTodo(value);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
