const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.toggle('hidden');
});

// Balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Random color
    const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'pink', 'orange'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random position
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = (5 + Math.random() * 5) + 's';
    
    document.getElementById('balloons').appendChild(balloon);
    
    // Remove balloon after it floats away
    setTimeout(() => {
        balloon.remove();
    }, 8000);
}

// Create balloons every 500 milliseconds
setInterval(createBalloon, 500);
