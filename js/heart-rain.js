class Heart {
    constructor() {
        this.element = document.createElement('div');
        this.element.innerHTML = '❤';
        this.element.style.position = 'fixed';
        this.element.style.fontSize = Math.random() * 20 + 10 + 'px';
        this.element.style.left = Math.random() * 100 + 'vw';
        this.element.style.top = '-20px';
        this.element.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 50%)`; // Pink to red colors
        this.element.style.opacity = Math.random() * 0.5 + 0.5;
        this.element.style.pointerEvents = 'none';
        this.element.style.zIndex = '9999';
        this.element.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        this.element.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(this.element);
        
        // Remove the heart after animation
        setTimeout(() => {
            this.element.remove();
        }, 5000);
    }
}

// Create hearts periodically
function createHeartRain() {
    setInterval(() => {
        new Heart();
    }, 300); // Create a new heart every 300ms
}

// Add the animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Start the heart rain when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createHeartRain();
}); 