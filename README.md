# 📘 iAssess – Online Examination Portal

**iAssess** is a lightweight, configurable, web-based examination entry portal designed for engineering entrance exams, screening tests, and internal assessments.
It provides **secure candidate sign-in**, **time-based exam activation**, **live countdown**, and **controlled exam access** using pure frontend technologies.

This project is ideal for:

* Engineering entrance exams
* Internal screening tests
* Practice/mock test portals
* Learning system design fundamentals

---

## ✨ Key Features

* 🔐 **Candidate Authentication**

  * Shiksha ID + OTEP validation
* ⏳ **Live Countdown Timer**

  * Displays remaining time until exam starts
* 🕙 **Time-Restricted Exam Access**

  * Exam link opens only after scheduled start time
* 🔊 **Audio Alerts**

  * Start sound when exam opens
* 🧩 **Config-Driven Design**

  * No hardcoded values in application logic
* 🎨 **Modern Glassmorphism UI**

  * Clean, responsive, professional design
* 🚫 **No Backend Dependency**

  * Works fully as a static web application (can be extended)

---

## 🛠️ Technology Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* No frameworks
* No backend (frontend-only architecture)

---

## 📂 Project Structure

```
iAssess-exam-portal/
│
├── index.html          # Main application entry
│
├── css/
│   └── styles.css      # Complete UI styling
│
├── js/
│   ├── config.js       # Centralized configuration (NO hardcoding)
│   └── app.js          # Application logic
│
└── README.md
```

---

## ⚙️ Configuration (Important)

All exam-specific values are controlled from **one single file**:

```
js/config.js
```

### You can configure:

* Exam title & authority
* Exam date and start time
* Exam duration
* Candidate credentials
* Exam redirection link
* Instructions list
* Audio alerts

### Example:

```javascript
const EXAM_CONFIG = {
    title: "NTC Online Examination Portal",
    authority: "National Testing Commission (Engineering Division)",

    exam: {
        name: "Engineering Entrance Examination",
        code: "EEE001-CSE&IT",
        startTime: "2026-01-14T10:00:00",
        durationMinutes: 120,
        link: "https://example.com/exam"
    },

    credentials: {
        shikshaId: "NTC980320",
        otep: "20031998"
    }
};
```

👉 **No application code needs to be modified** when exam details change.

---

## ▶️ How to Run the Project

### Option 1: Run Locally (Recommended)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/iAssess-exam-portal.git
   ```

2. Open the project folder in **VS Code**

3. Open `index.html` using:

   * VS Code **Live Server** extension
     **OR**
   * Directly open in a browser

---

### Option 2: Deploy as Static Site

You can deploy this project on:

* GitHub Pages
* Netlify
* Vercel
* Any static hosting service

No server configuration required.

---

## 🔐 Authentication Logic (Frontend Only)

> ⚠️ **Important Disclaimer**

Authentication is currently implemented on the **client side** for educational and demonstration purposes.

For real examinations:

* Backend validation is mandatory
* Credentials must never be exposed in frontend code
* Server-side session management is required

---

## 🧠 Design Principles Used

* Separation of concerns (HTML / CSS / JS)
* Configuration-driven architecture
* Event-based UI handling
* Minimal dependencies
* Extendable for backend integration

---

## 🚀 Possible Enhancements

* Backend authentication (Spring Boot / Node.js)
* MCQ test engine
* Question randomization
* Timer persistence (anti-refresh)
* Result evaluation & analytics
* Proctoring (tab switch logs, webcam support)
* Admin dashboard

---

## 👨‍💻 Author

**Naveen Prasanna**
Software Engineer
India

---

## 📜 License

This project is provided for **educational and internal use only**.
You are free to modify and extend it for learning and practice purposes.

---