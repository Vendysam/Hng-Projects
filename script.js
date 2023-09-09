function getCurrentUTCTimeInMilliseconds() {
    const currentTimeMilliseconds = new Date().getTime();
    return currentTimeMilliseconds;
}

function updateDisplay() {
    const timeElement = document.getElementById('time');
    const currentTimeMilliseconds = getCurrentUTCTimeInMilliseconds();
    timeElement.textContent = `Current UTC Time (Milliseconds): ${currentTimeMilliseconds}`;
}

// Update the display initially and every second
updateDisplay();
setInterval(updateDisplay, 1000);
