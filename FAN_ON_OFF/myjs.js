let fanSpeed = 0;
let fanRotation = 0;
let fanDirection = 1; // 1 for clockwise, -1 for counter-clockwise
let fanInterval;

function turnOn() {
    if (fanInterval) {
        fanSpeed = 0
        clearInterval(fanInterval);
        fanInterval = setInterval(rotateFan, 45 - fanSpeed * 10);
    }
    if (!fanInterval) {
        fanSpeed = 0
        fanInterval = setInterval(rotateFan, 45 - fanSpeed * 10);
    }
}

function turnOff() {
    if (fanInterval) {
        clearInterval(fanInterval);
        fanInterval = null;
    }
}

function setSpeed(speed) {
    fanSpeed = speed;
    if (fanInterval) {
        clearInterval(fanInterval);
        fanInterval = setInterval(rotateFan, 45 - fanSpeed * 10);
    }
}

function rotateFan() {
    fanRotation += fanDirection * (10 + fanSpeed); // Adjust the rotation speed based on fanSpeed
    document.getElementById('fan').style.transform = `rotate(${fanRotation}deg)`;
}
