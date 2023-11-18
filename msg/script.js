function createMessage(inputElement, messageBoxElement, circleClass) {
  const inputVal = inputElement.value;
  if (inputVal == "") {
    alert("Bir şeyler yazın");
  } else {
    const message = document.createElement("li");
    message.className = "message";

    // URL kontrol
    const isURL = /^(http|https):\/\/[^ "]+$/i.test(inputVal);

    if (isURL) {
      // URL'se sadece bağlantıyı göster
      message.innerHTML = `
      <i class=" bi ${circleClass}"></i>
      <a href="${inputVal}" </a>
      `;
    } else {
      //  URL değilse paragraf olarak göster
      message.innerHTML = `
      <i class=" bi ${circleClass}"></i>
      <p>${inputVal}</p>`;
    }

    message.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      // Mesaj  sil
      message.parentNode.removeChild(message);
    });

    // Mesajı  ekle
    messageBoxElement.appendChild(message);

    // messageBoxElement'i  güncelle
    if (messageBoxElement.classList.contains("message-box")) {
      const secMessageBox = document.querySelector(".sec-message-box");
      secMessageBox.appendChild(message.cloneNode(true));
    } else if (messageBoxElement.classList.contains("sec-message-box")) {
      const messageBox = document.querySelector(".message-box");
      messageBox.appendChild(message.cloneNode(true));
    }

    // Mesaj kutusunu en altına kaydır
    messageBoxElement.scrollTop = messageBoxElement.scrollHeight;
  }

  inputElement.value = "";
}

const input = document.querySelector(".input");
const getInput = document.querySelector(".btn");
const messageBox = document.querySelector(".message-box");

getInput.addEventListener("click", () => {
  createMessage(input, messageBox, "bi-1-circle-fill");
});

const secInput = document.querySelector(".sec-input");
const secGetInput = document.querySelector(".sec-btn");
const secMessageBox = document.querySelector(".sec-message-box");

secGetInput.addEventListener("click", () => {
  createMessage(secInput, secMessageBox, "bi-2-circle-fill");

  secMessageBox.scrollTop = secMessageBox.scrollHeight;
});
