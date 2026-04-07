// script.js

// Loader animation
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => loader.style.display = 'none', 1000);
});

// Smooth section navigation
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Confetti explosion on surprise click
const surpriseButton = document.getElementById('surprise-button');
surpriseButton.addEventListener('click', function() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti');
    document.body.appendChild(confettiContainer);
    // Logic for confetti explosion (using a library like `canvas-confetti`)
    // This would go here
});

// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Bubble particles effect
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 3000);
}

setInterval(createBubble, 500);

// Mobile event handlers
if ('ontouchstart' in window) {
    document.body.classList.add('touch');
    // Additional mobile-specific handling could go here
}

