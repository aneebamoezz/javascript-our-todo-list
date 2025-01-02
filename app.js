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

  todoItems.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;
    listContainer.appendChild(li);

    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.style.cursor = "pointer";
    li.appendChild(delButton);

    delButton.addEventListener("click", () => {
      removeItem(index);
    });
  });
}

function removeItem(index) {
  todoItems.splice(index, 1);
  saveData(); 
  displayItems();
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