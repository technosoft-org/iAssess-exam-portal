/* ==========================================
   ⚙️ EXAM CONFIGURATION SETTINGS
   ========================================== */

const CONFIG = {
    // 🔐 CREDENTIALS
    correctID: "NTC980320",      // User ID
    correctOTEP: "20031998",     // Password

    // 📸 PHOTO SECURITY SETTINGS
    // "enable"  = Photo capture is MANDATORY to sign in.
    // "disable" = Photo capture is HIDDEN and NOT required.
    photoCapture: "enable",

    // 🔗 EXAM LINK
    examLink: "https://gemini.google.com/share/07921f70d61c",

    // 🗓️ SCHEDULE (Format: YYYY-MM-DDTHH:MM:SS)
    // Make sure to use military time (24-hour format) for the logic
    startDateTime: "2026-02-28T19:00:00", 
    endDateTime:   "2026-02-28T21:00:00",

    // ⏳ DURATION (in minutes)
    examDurationMinutes: 120,

    // 📝 DISPLAY DETAILS (These appear on the screen)
    examName: "Faculty Eligibility Test - CSE",
    examCode: "FET-CSE-001",
    examDateText: "28 February 2026",
    examTimeText: "07:00 PM – 09:00 PM"
};