# iAssess Exam Portal

**iAssess Exam Portal** is a basic online examination entry system built using **HTML, CSS, and JavaScript**.
It simulates a real online exam environment with countdown timer, secure sign-in, exam start time validation, and exam duration tracking.

This project is useful for **learning**, **demo**, and **POC-level assessment systems**.

---

## 🚀 Features

* Exam countdown timer (before exam starts)
* Exam goes LIVE only at fixed date & time
* Secure login using Shiksha ID and OTEP
* Exam link opens only after verification
* Fixed exam duration with live time remaining
* Auto alert when exam time is over
* Tab switch detection warning
* Page reload / exit restriction during exam
* Clean modern UI (glassmorphism style)
* Audio alerts for exam start and end

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

No external libraries or frameworks used.

---

## 🧩 How It Works

1. Candidate enters **Shiksha ID** and **OTEP**
2. System validates credentials
3. Exam link becomes active only at exam start time
4. Exam timer starts once exam opens
5. Remaining time is shown live
6. Exam auto-ends after fixed duration

---

## 🔐 Demo Credentials (for testing)

```
Shiksha ID : NTC980320
OTEP       : 20031998
```

---

## 📅 Exam Configuration (in code)

```js
const examOpenDate = new Date("2026-01-14T10:00:00");
const EXAM_DURATION_MS = 120 * 60 * 1000;
```

You can edit these values to reuse the portal for other exams.

---

## 📂 Project Structure

```
iassess-exam-portal/
│
├── index.html
└── README.md
```

---

## ⚠️ Disclaimer

This project is created for **learning and demonstration purposes only**.
It is **not production-ready** and does not include backend validation or real security controls.

---

## ✨ Future Improvements

* Backend authentication (Spring Boot / Node.js)
* Database integration
* Question rendering engine
* Auto submission
* Result evaluation
* Admin dashboard

---

## 👨‍💻 Author

Developed by **Naveen Prasanna**
POC project for online assessment systems.

---

Just tell me 👍
