const animatedBackground = document.querySelector('.animated-background');
let position = 0;
const speed = 2; // Velocidade da animação

function moveBackground() {
    position += speed;
    animatedBackground.style.backgroundPosition = `${position}px 0`;
    requestAnimationFrame(moveBackground);
}

moveBackground();

function goBack() {
    window.history.back()
}