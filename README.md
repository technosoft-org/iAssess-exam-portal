# iAssess – Online Secure Examination Portal (v2.0)

> **A modern, secure, browser-based examination portal UI** designed for scheduled online exams with candidate verification and exam session control.

---

## 🎯 What is iAssess?
**iAssess** is an **Online Secure Examination Platform UI** that provides a disciplined exam entry workflow:
- Scheduled access window
- Candidate sign-in verification
- Mandatory camera photo capture
- Secure fullscreen exam mode
- Countdown and sound alerts

---

## ✅ Highlights (v2.0)

### 🕒 Scheduled Exam Access
- Exam can be opened **only during the configured time window**
- Entry blocked **before start time**
- Access disabled **after end time**

### 📷 Candidate Verification
- **Photo capture is mandatory**
- Candidate cannot sign-in without capturing photo

### 🔒 Secure Fullscreen Exam Mode
- Fullscreen auto-enabled at exam start
- Fullscreen exit attempts are blocked during the session
- Helps restrict tab switching / leaving the exam environment

### ⏳ Smart Countdown Timers
- Countdown until exam opens
- Countdown until exam window closes
- Displayed in multiple UI locations (header + sign-in area)

### 🔊 Exam Audio Alerts
- Start sound when exam begins
- 10-second remaining warning sound
- Loud, long “time over” sound after exam duration completes

### 🧱 Clean Two-Panel Layout
- LEFT: Exam details + instructions
- RIGHT: Candidate Sign-in + photo capture
- Responsive: switches to single column for mobile/tablet

---

## 🧩 Included Files
```

index.html
README.md

````

---

## ⚙️ Configuration (Use for Any Exam)
Edit inside `index.html`:

### Exam Schedule Window
```js
const examStartDateTime = new Date("YYYY-MM-DDTHH:MM:SS");
const examEndDateTime   = new Date("YYYY-MM-DDTHH:MM:SS");
````

### Exam Duration

```js
const EXAM_DURATION_MS = <minutes> * 60 * 1000;
```

### Exam Launch URL

```js
const EXAM_LINK = "<CONFIDENTIAL_EXAM_URL>";
```

### Candidate Login Credentials

```js
const correctID   = "<CANDIDATE_ID>";
const correctOTEP = "<OTEP_PASSWORD>";
```

---

## ▶️ How to Run

1. Download / clone the project
2. Open `index.html` in a browser
3. Allow **Camera Permission**
4. Sign in → Open Examination

---

## 🌐 Compatibility

✅ Google Chrome
✅ Microsoft Edge

(Camera + fullscreen features require modern browsers.)

---

## 🔐 Notes (Security)

This is a **frontend-only portal UI**:

* Not production-secure without backend integration
* Client-side credentials are for demo/simulation
* Recommended: server-side auth + logging + encrypted exam sessions

---

## 🏢 Developed By

**technoSoft — A Software Company**

***Developed by: Naveen Prasanna***

***Platform:*** iAssess – Online Secure Examination Platform

---
