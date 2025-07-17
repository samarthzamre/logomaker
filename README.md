# 🎨 LogoMaker

A sleek, fast, and interactive logo-making web app built with **React.js**, **Tailwind CSS**, and **Vite**. Easily customize icons, colors, backgrounds, and preview/download your logos in real time.

🔗 **Live Demo:** [https://logomaker-two-vercel.app/](https://logomaker-two.vercel.app/)

---

## ✨ Features

- 🎯 Interactive icon selection from a curated list
- 🎨 Color picker for icon and background customization
- 🧩 Background toggle controller
- 💾 Download high-resolution logo previews
- 💡 Live preview with canvas screenshot using `html2canvas`
- 🧩 Organized and reusable component structure

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/samarthzamre/samarthzamre-logomaker.git
cd samarthzamre-logomaker

---

## 📁 Project Structure
samarthzamre-logomaker/
├── README.md
├── components.json
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── ...
└── src/
├── App.jsx
├── main.jsx
├── components/
│ ├── BackgroundController.jsx
│ ├── ColorPickerController.jsx
│ ├── IconController.jsx
│ ├── IconList.jsx
│ ├── LogoPreview.jsx
│ ├── SideNav.jsx
│ └── ui/
│ ├── button.jsx
│ ├── card.jsx
│ ├── dialog.jsx
│ ├── slider.jsx
│ └── tabs.jsx
├── constants/
│ └── Icons.jsx
├── context/
│ └── UpdateStorageContext.jsx
└── lib/
└── utils.js
---

```
2. Install dependencies
npm install
3. Start the development server
npm run dev

🧪 Tech Stack

⚛️ React.js
💨 Tailwind CSS
⚡ Vite
🎨 Lucide Icons
📸 html2canvas

🧠 Learnings
Context API usage for state sharing
Component reusability with Tailwind + UI abstractions
Image download via canvas snapshot
Folder structure planning for scalable frontend apps

🧑‍💻 Author
Samarth Vidhyadas Zamre
