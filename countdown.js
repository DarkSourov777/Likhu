// Countdown Timer Logic
const countdownDate = new Date("Feb 23, 2025 00:00:00").getTime();
const timerElement = document.getElementById("timer");

const countdown = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdown);
        timerElement.innerHTML = "Happy Birthday!";
        playConfetti();
    }
}, 1000);
