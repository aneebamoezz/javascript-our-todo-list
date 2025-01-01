const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addCartBtn = document.getElementById("addBtn");

addCartBtn.addEventListener("click", () => {
  alertMsg();
});

function alertMsg() {
  if (inputBox.value === "") {
    alert("please write something");
  } else {
    updatItems();
  }
}

function updatItems() {
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  inputBox.value = "";

  let delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.style.cursor = "pointer";
  li.appendChild(delButton);

  delButton.addEventListener("click", () => {
    li.remove(delButton);
  });
}


listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "DELETE") {
    e.target.parentElement.remove();
  } else {
    false;
  }
});
