const chatLog = document.querySelector(".chat-log");
const chatInput = document.querySelector(".chat-input input");
const sendBtn = document.querySelector(".chat-input button");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  if (chatInput.value !== "") {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = chatInput.value;
    chatLog.appendChild(message);
    chatInput.value = "";
  }
}

const chatPopup = document.querySelector(".chat-popup");

function openHelp() {
  chatPopup.classList.add("show");
}

function closeHelp() {
  chatPopup.classList.remove("show");
}

