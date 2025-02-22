function playConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ff6347', '#ff1493', '#ff4500', '#f0f8ff'];

    function createConfetti(x, y) {
        const size = Math.random() * 10 + 5;
        const speed = Math.random() * 3 + 1;
        const angle = Math.random() * 360;
        const velocityX = Math.cos(angle) * speed;
        const velocityY = Math.sin(angle) * speed;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, false);
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fill();
        ctx.closePath();

        x += velocityX;
        y += velocityY;

        if (x > canvas.width || x < 0 || y > canvas.height || y < 0) return;
        requestAnimationFrame(() => createConfetti(x, y));
    }

    createConfetti(window.innerWidth / 2, window.innerHeight / 2);
}
