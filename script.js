/* ==========================
   INIT: LOAD CONFIG TO UI
   ========================== */
const examStartDateTime = new Date(CONFIG.startDateTime);
const examEndDateTime   = new Date(CONFIG.endDateTime);
const EXAM_DURATION_MS  = CONFIG.examDurationMinutes * 60 * 1000;

// Populate HTML with Config Data
document.getElementById("disp_examName").innerText = CONFIG.examName;
document.getElementById("disp_examCode").innerText = CONFIG.examCode;
document.getElementById("disp_examDate").innerText = CONFIG.examDateText;
document.getElementById("disp_examTime").innerText = CONFIG.examTimeText;
document.getElementById("disp_duration").innerText = CONFIG.examDurationMinutes + " minutes";
document.getElementById("disp_startTimeInfo").innerText = CONFIG.examTimeText.split("–")[0]; // Grabs start time part

let isPhotoCaptured = false;
let isSignedIn = false;
let examSessionRunning = false;
let fullscreenLockEnabled = false;
let examTimerInterval = null;

/* ==========================
   SOUND SYSTEM
   ========================== */
function playBeep({ frequency = 880, duration = 200, volume = 0.25, type = "sine" } = {}) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.value = frequency;
        gain.gain.value = volume;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setTimeout(() => { osc.stop(); ctx.close(); }, duration);
    } catch (e) { console.warn("Audio blocked:", e); }
}

function playExamStartSound() {
    playBeep({ frequency: 950, duration: 180, volume: 0.22, type: "sine" });
    setTimeout(() => playBeep({ frequency: 1200, duration: 140, volume: 0.22, type: "sine" }), 220);
}
function playTenSecWarningSound() {
    playBeep({ frequency: 650, duration: 160, volume: 0.35, type: "triangle" });
}
function playExamOverSound() {
    playBeep({ frequency: 400, duration: 400, volume: 0.6, type: "square" });
    setTimeout(() => playBeep({ frequency: 300, duration: 700, volume: 0.8, type: "square" }), 500);
}

/* ==========================
   FULLSCREEN LOCK
   ========================== */
async function enterFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
        if (el.requestFullscreen) return el.requestFullscreen();
        if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
    }
}
async function exitFullscreen() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) return document.exitFullscreen();
        if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    }
}
function enableFullscreenLock() {
    fullscreenLockEnabled = true;
    document.addEventListener("fullscreenchange", async () => {
        if (fullscreenLockEnabled && !document.fullscreenElement) {
            await enterFullscreen();
        }
    });
}

/* ==========================
   COUNTDOWN & LOGIC
   ========================== */
function updateCountdownUI() {
    const now = new Date().getTime();
    const start = examStartDateTime.getTime();
    const end = examEndDateTime.getTime();
    const c1 = document.getElementById("countdown");
    const c2 = document.getElementById("countdown2");

    if (now < start) {
        const dist = start - now;
        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);
        c1.innerHTML = `⏳ Exam starts in: ${d}d : ${h}h : ${m}m : ${s}s`;
        c2.innerHTML = "";
        return;
    }
    if (now >= start && now <= end) {
        const remaining = end - now;
        const h = Math.floor(remaining / (1000 * 60 * 60));
        const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((remaining % (1000 * 60)) / 1000);
        const msg = `✅ Exam window OPEN | Closes in: ${h}h : ${m}m : ${s}s`;
        c1.innerHTML = msg;
        c2.innerHTML = msg;
        return;
    }
    const msg = "⛔ Examination window CLOSED";
    c1.innerHTML = msg;
    c2.innerHTML = msg;
    document.getElementById("linkBtn").style.display = "none";
}
setInterval(updateCountdownUI, 1000);

function signin() {
    const id = document.getElementById("shikshaId").value.trim();
    const otp = document.getElementById("otep").value.trim();
    const errorBox = document.getElementById("errorBox");
    const linkBtn = document.getElementById("linkBtn");

    if (!isPhotoCaptured) {
        showError("❌ Photo capture is mandatory before Sign In.");
        return;
    }
    if (id === CONFIG.correctID && otp === CONFIG.correctOTEP) {
        isSignedIn = true;
        errorBox.style.display = "none";
        const now = new Date().getTime();
        if (now >= examStartDateTime.getTime() && now <= examEndDateTime.getTime()) {
            linkBtn.style.display = "block";
        } else {
            showError("⚠️ Signed in, but exam link is not active yet.", "orange");
        }
    } else {
        showError("❌ Invalid credentials.");
    }
}

function openExam() {
    const now = new Date().getTime();
    if (!isSignedIn) return showError("❌ Please Sign In first.");
    if (now < examStartDateTime.getTime()) return showError("⚠️ Exam not started yet.", "orange");
    if (now > examEndDateTime.getTime()) return showError("⛔ Exam window CLOSED.");
    if (examSessionRunning) return showError("⚠️ Exam already running.", "orange");

    examSessionRunning = true;
    enableFullscreenLock();
    enterFullscreen();
    playExamStartSound();
    window.open(CONFIG.examLink, "_blank");

    const errorBox = document.getElementById("errorBox");
    errorBox.style.display = "block";
    errorBox.style.background = "rgba(0,255,0,0.12)";
    errorBox.style.borderLeft = "4px solid #22c55e";
    errorBox.innerHTML = `✅ Exam Started! You have <b>${CONFIG.examDurationMinutes} minutes</b>.`;

    const sessionEnd = Date.now() + EXAM_DURATION_MS;
    examTimerInterval = setInterval(() => {
        if (Date.now() >= sessionEnd) {
            clearInterval(examTimerInterval);
            playExamOverSound();
            exitFullscreen();
            showError("⛔ Exam Time Over!");
            examSessionRunning = false;
        }
    }, 1000);
}

function showError(msg, color="red") {
    const eb = document.getElementById("errorBox");
    eb.style.display = "block";
    eb.style.background = color === "red" ? "rgba(255,0,0,0.18)" : "rgba(255,165,0,0.15)";
    eb.style.borderLeft = `4px solid ${color === "red" ? "#ef4444" : "#f59e0b"}`;
    eb.innerHTML = msg;
}

/* ==========================
   PHOTO CAPTURE
   ========================== */
(function () {
    const captureBtn = document.getElementById("captureBtn");
    const video = document.getElementById("camVideo");
    const canvas = document.getElementById("camCanvas");
    const photo = document.getElementById("capturedPhoto");
    let stream = null; 

    captureBtn.addEventListener("click", async () => {
        if (!stream) {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                video.style.display = "block";
                photo.style.display = "none";
                captureBtn.innerText = "Click to Snap";
            } catch(e) { alert("Camera error: " + e.message); }
        } else {
            const ctx = canvas.getContext("2d");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0);
            photo.src = canvas.toDataURL("image/png");
            photo.style.display = "block";
            stream.getTracks().forEach(t => t.stop());
            stream = null;
            video.style.display = "none";
            isPhotoCaptured = true;
            captureBtn.style.display = "none";
        }
    });
})();