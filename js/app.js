const examStartDate = new Date(EXAM_CONFIG.exam.startTime);
const examDurationMs = EXAM_CONFIG.exam.durationMinutes * 60 * 1000;

document.getElementById("examTitle").innerText = EXAM_CONFIG.title;
document.getElementById("examAuthority").innerText = EXAM_CONFIG.authority;

document.getElementById("startSound").src = EXAM_CONFIG.audio.start;
document.getElementById("endSound").src = EXAM_CONFIG.audio.end;

const details = `
<p><b>Name:</b> ${EXAM_CONFIG.exam.name}</p>
<p><b>Code:</b> ${EXAM_CONFIG.exam.code}</p>
<p><b>Date:</b> ${EXAM_CONFIG.exam.date}</p>
<p><b>Duration:</b> ${EXAM_CONFIG.exam.durationMinutes} minutes</p>
`;
document.getElementById("examDetails").innerHTML = details;

const ul = document.getElementById("instructions");
EXAM_CONFIG.instructions.forEach(i => {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
});

document.getElementById("signinBtn").onclick = () => {
    const id = shikshaId.value.trim();
    const otp = otep.value.trim();

    if (id === EXAM_CONFIG.credentials.shikshaId &&
        otp === EXAM_CONFIG.credentials.otep) {
        linkBtn.style.display = "block";
        errorBox.style.display = "none";
    } else {
        errorBox.style.display = "block";
        errorBox.innerText = "Invalid credentials";
    }
};

document.getElementById("linkBtn").onclick = () => {
    if (Date.now() < examStartDate.getTime()) {
        alert("Exam not started yet");
        return;
    }
    window.open(EXAM_CONFIG.exam.link, "_blank");
};
