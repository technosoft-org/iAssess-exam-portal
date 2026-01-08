const EXAM_CONFIG = {
    title: "NTC Online Examination Portal",
    authority: "National Testing Commission (Engineering Division)",

    exam: {
        name: "Engineering Entrance Examination",
        code: "EEE001-CSE&IT",
        date: "14 January 2026",
        startTime: "2026-01-14T10:00:00",
        durationMinutes: 120,
        link: "https://gemini.google.com/share/dd846d0e3815"
    },

    credentials: {
        shikshaId: "NTC980320",
        otep: "20031998"
    },

    instructions: [
        "Login using valid Shiksha ID and OTEP",
        "OTEP format: DDMMYYYY",
        "Late entry is not allowed",
        "Do not refresh or close browser",
        "Ensure stable internet connection"
    ],

    audio: {
        start: "https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3",
        end: "https://assets.mixkit.co/sfx/preview/mixkit-alarm-tone-996.mp3"
    }
};
