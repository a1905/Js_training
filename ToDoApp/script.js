let getInput = document.getElementById("input");
let myList = document.getElementById("myList");

function addList() {
  let inputVal = getInput.value;

  if (inputVal == "") {
    alert("Bir şeyler yazın.");
  } else {
    let itemWr = document.createElement("div");
    itemWr.classList.add("myList-area");
    let itemP = document.createElement("p");
    itemP.innerText = inputVal;
    let iButton = document.createElement("i");
    iButton.classList.add("bi", "bi-trash");

    iButton.addEventListener("click", function () {
      deleteItem(itemWr);
    });

    itemWr.appendChild(itemP);
    itemWr.appendChild(iButton);
    myList.appendChild(itemWr);
    getInput.value = "";
  }
}

function deleteItem(item) {
  myList.removeChild(item);
}
getInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addList();
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "Delete") {
    let firstItem = myList.firstElementChild;
    if (firstItem) {
      deleteItem(firstItem);
    }
  }
});
