const inputBox = document.getElementById("input-box");
const listCon = document.getElementById("list-container");
const addCartBtn= document.getElementById("addBtn");

addCartBtn.addEventListener("click", () => {
    alertMsg()
})


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
  listCon.appendChild(li);
  inputBox.value = "";
}
