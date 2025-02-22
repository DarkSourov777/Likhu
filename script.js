// 1. Play background music when the page loads
window.onload = function() {
    document.getElementById("bg-music").play();
};

// 2. Countdown Timer (set a countdown to a future date)
let countdownDate = new Date("Feb 25, 2025 00:00:00").getTime();

let timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// 3. Interactive Heart Animation
document.querySelector(".interactive-heart").addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.2)";
    this.style.transition = "transform 0.3s";
});

document.querySelector(".interactive-heart").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
});

// 4. Love Letter animation (reveal the message slowly)
let loveMessage = "You make my world a better place, and I’m so grateful for you! Wishing you the happiest birthday!";
let i = 0;
function typeLoveMessage() {
    if (i < loveMessage.length) {
        document.getElementById("love-note").innerHTML += loveMessage.charAt(i);
        i++;
        setTimeout(typeLoveMessage, 50);
    }
}
typeLoveMessage();

// 5. Fireworks animation (using a simple effect)
function createFireworks() {
    let firework = document.createElement("div");
    firework.classList.add("firework");
    document.querySelector(".fireworks").appendChild(firework);

    firework.style.left = Math.random() * 100 + "vw";
    firework.style.animation = `firework-animation ${Math.random() * 3 + 2}s ease-in-out forwards`;

    setTimeout(() => {
        firework.remove();
    }, 3000);
}
setInterval(createFireworks, 500);
