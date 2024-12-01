/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;

    angle = 0.0;

    context.beginPath();
    context.moveTo(x, y);

    for (let counter = 3; counter < 600; counter += 3) {
        context.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}

function DrawFireworks(context) {
    // Clear drawing space
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    // Function to get a random color
    function getRandomColor() {
        return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }

    // Draw a firework
    function drawFirework(x, y, lines, radius) {
        for (let i = 0; i < lines; i++) {
            const angle = (Math.PI * 2 * i) / lines;
            const endX = x + Math.cos(angle) * radius;
            const endY = y + Math.sin(angle) * radius;

            context.strokeStyle = getRandomColor();
            context.lineWidth = 2;

            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(endX, endY);
            context.stroke();
        }
    }

    // Create multiple fireworks
    for (let i = 0; i < 5; i++) {
        const x = Math.random() * context.canvas.width;
        const y = Math.random() * context.canvas.height;
        const lines = Math.floor(Math.random() * 15) + 10; // Random number of lines
        const radius = Math.random() * 100 + 50; // Random radius

        drawFirework(x, y, lines, radius);
    }
}

