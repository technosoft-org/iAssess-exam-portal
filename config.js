/* ==========================================
   ⚙️ EXAM CONFIGURATION SETTINGS
   ========================================== */

const CONFIG = {
    // 🔐 CREDENTIALS
    correctID: "NTC980320",      // User ID
    correctOTEP: "20031998",     // Password

    // ⚡ FORCE LIVE MODE (Overrides Schedule)
    // "enable"  = Exam is OPEN NOW (ignores Date & Time below).
    // "disable" = Exam follows the Date & Time strictly.
    forceLiveMode: "enable",

    // 📸 PHOTO SECURITY SETTINGS
    // "enable"  = Photo capture is MANDATORY to sign in.
    // "disable" = Photo capture is HIDDEN and NOT required.
    photoCapture: "enable",

    // 🔗 EXAM LINKS
    //examLink: "https://gemini.google.com/share/6adbfc3c625e",

    // 🗓️ SCHEDULE (Format: YYYY-MM-DDTHH:MM:SS)
    // Make sure to use military time (24-hour format)
    startDateTime: "2026-04-12T14:00:00",
    endDateTime: "2026-04-12T16:00:00",

    // ⏳ DURATION (in minutes)
    examDurationMinutes: 60,

    // 📝 DISPLAY DETAILS (These appear on the screen)
    examName: "Engineering Eligibility Examination",
    examCode: "EEE001",
    examDateText: "12 April 2026",
    examTimeText: "02:00 PM to 04:00 PM"
};