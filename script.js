let tasksCompleted = { youtube: false, instagram: false };

function completeTask(element, task) {
    tasksCompleted[task] = true;
    element.style.background = "#28a745";
    element.querySelector(".status").textContent = "✅";
    checkUnlock();
}

function checkUnlock() {
    if (tasksCompleted.youtube && tasksCompleted.instagram) {
        let unlockBtn = document.getElementById("unlockBtn");
        unlockBtn.classList.remove("locked");
        unlockBtn.classList.add("unlocked");
        unlockBtn.disabled = false;
        unlockBtn.textContent = "✅ Click to Unlock!";
        unlockBtn.onclick = function () {
            window.location.href = "https://drive.google.com/file/d/17oZbBO9NJ3vpUyg0Vd37dAEMnasBcIQG/view?usp=drivesdk";
        };
    }
}
