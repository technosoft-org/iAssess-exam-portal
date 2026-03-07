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
    forceLiveMode: "disable",

    // 📸 PHOTO SECURITY SETTINGS
    // "enable"  = Photo capture is MANDATORY to sign in.
    // "disable" = Photo capture is HIDDEN and NOT required.
    photoCapture: "disable",

    // 🔗 EXAM LINKS
    //MOCK EXAM LINK
    //examLink: "https://gemini.google.com/share/11c8a232059e",
    //ACTUAL EXAM LINK
    //examLink: "https://gemini.google.com/share/d8c738f8188a",
    //ACTUAL EXAM LINK
    examLink: "https://gemini.google.com/share/903e8c6094e6",

    // 🗓️ SCHEDULE (Format: YYYY-MM-DDTHH:MM:SS)
    // Make sure to use military time (24-hour format)
    startDateTime: "2026-03-08T18:00:00",
    endDateTime: "2026-03-08T19:00:00",

    // ⏳ DURATION (in minutes)
    examDurationMinutes: 60,

    // 📝 DISPLAY DETAILS (These appear on the screen)
    examName: "National Institutes Selection Test",
    examCode: "NIST-001",
    examDateText: "08 March 2026",
    examTimeText: "06:00 PM to 07:00 PM"
};