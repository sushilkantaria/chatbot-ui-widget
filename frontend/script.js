// Load Particles Background
tsParticles.load("tsparticles", {
  background: { color: { value: "#000" } },
  fpsLimit: 60,
  particles: {
    color: { value: "#ffffff" },
    links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.5, width: 1 },
    move: { enable: true, speed: 1.5 },
    number: { value: 50 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: 3 }
  },
  detectRetina: true
});

// Toggle Chat Widget
function toggleChat() {
  const widget = document.getElementById("chatWidget");
  widget.classList.toggle("active");
}

// Send Message Function
async function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userMessage = input.value.trim();

  if (!userMessage) return;

  addMessage("You", userMessage, "user");

  input.value = "";
  addTyping();

  try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    removeTyping();
    addMessage("Bot", data.response, "bot");
  } catch (error) {
    removeTyping();
    addMessage("Bot", "Error: " + error.message, "bot");
  }
}

// Display a Message
function addMessage(sender, message, type) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", type);

  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  avatar.style.backgroundImage =
    type === "bot"
      ? "url('https://cdn-icons-png.flaticon.com/512/4712/4712107.png')"
      : "url('https://cdn-icons-png.flaticon.com/512/4712/4712105.png')";

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.innerText = message;

  if (type === "bot") {
    msgDiv.appendChild(avatar);
    msgDiv.appendChild(bubble);
  } else {
    msgDiv.appendChild(bubble);
    msgDiv.appendChild(avatar);
  }

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Typing Animation
function addTyping() {
  const chatBox = document.getElementById("chat-box");
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("message", "bot");
  typingDiv.id = "typing";
  typingDiv.innerHTML = `
    <div class="avatar" style="background-image: url('https://cdn-icons-png.flaticon.com/512/4712/4712107.png')"></div>
    <div class="bubble"><em>Typing...</em></div>`;
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
}
