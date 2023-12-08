const symbols = ['🍒', '🍇', '🍊', '🍋', '🍉', '🍓'];
const reels = document.querySelectorAll('.reel');
const spinButton = document.getElementById('spin-button');

function spinReel(reel) {
    return setInterval(() => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reel.textContent = randomSymbol;
    }, 100);
}

function stopReel(reel, interval) {
    clearInterval(interval);
}

spinButton.addEventListener('click', () => {
    reels.forEach((reel, index) => {
        const interval = spinReel(reel);
        setTimeout(() => {
            stopReel(reel, interval);
        }, 2000 + index * 500); // Adjust the timing for each reel
    });
});
