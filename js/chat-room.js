document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const messagesContainer = document.getElementById("messagesContainer");

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const suffix = hours >= 12 ? "p.m." : "a.m.";

    hours = hours % 12;
    if (hours === 0) hours = 12;

    return `${hours}:${minutes} ${suffix}`;
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    const row = document.createElement("div");
    row.className = "message-row message-row-out";
    row.innerHTML = `
      <div class="message-bubble message-bubble-out">${text}</div>
    `;

    const time = document.createElement("div");
    time.className = "message-time message-time-out";
    time.textContent = getCurrentTime();

    messagesContainer.appendChild(row);
    messagesContainer.appendChild(time);

    input.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
});