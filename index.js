const finalDate = new Date(2025, 6, 17);
let days = document.querySelector('[data-value="days"]');
let hours = document.querySelector('[data-value="hours"]');
let mins = document.querySelector('[data-value="mins"]');
let secs = document.querySelector('[data-value="secs"]');

function startTimer() {
    const timerInterval = setInterval(() => {
        let remainderTime = finalDate.getTime() - Date.now();
        if (remainderTime >= 0) {
            days.textContent = Math.floor(remainderTime / (1000 * 60 * 60 * 24)); 
            hours.textContent = Math.floor((remainderTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            mins.textContent = Math.floor((remainderTime % (1000 * 60 * 60)) / (1000 * 60));
            secs.textContent = Math.floor((remainderTime % (1000 * 60)) / 1000);
        } else {
            clearInterval(timerInterval);
            days.textContent = "E"; 
            hours.textContent = "N";
            mins.textContent = "D";
            secs.textContent = "!";
        }
    }, 1000);
}
startTimer();