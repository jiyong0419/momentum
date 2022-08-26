"use strict";
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

/**입력받은 Todo를 localStorage에 저장 */
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

/**Todo가 submit되었을때 Todo리스트에 li추가 */
function paintTodo(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
  li.setAttribute("id", newToDoObj.id);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const value = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: value,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintTodo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
