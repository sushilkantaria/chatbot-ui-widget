# 💬 Chatbot UI Widget with OpenAI & Animated UI

A floating chatbot widget with animated gradient background, particle effects, and OpenAI GPT integration. Designed to be embedded in any website with a clean, modern look.

![Made with HTML, CSS, JavaScript, Flask](https://img.shields.io/badge/Built%20with-HTML%2C%20CSS%2C%20JS%2C%20Flask-blue)
![OpenAI API](https://img.shields.io/badge/Powered%20by-OpenAI-ffb86c)

---

## ✨ Features

- 💬 Floating chatbot widget in bottom-right corner
- 🌈 Animated gradient inside chat box
- 🎇 Background particle animation
- 🤖 OpenAI GPT integration (via Flask backend)
- 🧠 Typing animation and user/bot avatars
- 🌓 Dark overlay background and toggle UI

---

## 📁 Project Structure

chatbot_ui/
├── backend/
│ ├── app.py # Flask backend with OpenAI integration
│ ├── requirements.txt # Python dependencies
├── frontend/
│ ├── index.html # Chat UI widget
│ ├── style.css # Responsive and animated styles
│ ├── script.js # Chat functionality and animations
├── .gitignore
├── README.md# chatbot-ui-widget


---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/sushilkantaria/chatbot-ui-widget.git
cd chatbot-ui-widget

cd backend
python -m venv venv
venv\Scripts\activate        # For Windows
pip install -r requirements.txt
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxx
python app.py
🔹 3. Launch the Frontend
Open frontend/index.html in your browser.

Click the 💬 button in the bottom-right to chat.

🚀 Future Ideas
Add voice input/output

Save chat history

Add chatbot personality presets

Integrate user authentication


---

✅ Let me know if you want to:
- Add screenshots
- Use a GIF demo
- Write it shorter for a quick portfolio project

Just copy this into a `README.md` file and push it with:

```bash
git add README.md
git commit -m "Add project README"
git push
