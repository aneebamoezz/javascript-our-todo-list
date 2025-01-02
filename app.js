const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addCartBtn = document.getElementById("addBtn");

let todoItems = [];

addCartBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("please write something");
  } else {
    todoItems.push(inputBox.value);
    inputBox.value = "";
    displayItems();
    saveData();
  }
});

function displayItems() {
  listContainer.innerHTML = "";

  for (let i = 0; i < todoItems.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = todoItems[i];
    listContainer.appendChild(li);

    let delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    delButton.style.cursor = "pointer";
    li.appendChild(delButton);

    delButton.addEventListener("click", () => {
      li.remove(delButton);
      saveData();
    });
  }
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

const savedTodo = localStorage.getItem("todos")
if(savedTodo){
  todoItems = JSON.parse(savedTodo)
  displayItems()
}

function saveData() {
  localStorage.setItem("todos", JSON.stringify(todoItems));
}

function deleteItem() {
  localStorage.removeItem("todos");
}