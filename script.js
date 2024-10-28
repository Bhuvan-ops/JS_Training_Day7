let isFirstClick = true; 

function updateTime() {
    const currentTime = new Date();
    const result = document.getElementById("result");
    let hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    let ampm = "AM"; 

    if (hours >= 12) {
        ampm = "PM"; 
    }

    if (isFirstClick) {
        hours = hours % 12;
        if (hours === 0) {
            hours = 12;
        }
    } 

    hours = String(hours).padStart(2, '0');

    result.textContent = `${hours}:${minutes}:${seconds} ${isFirstClick ? ampm : ''}`;
}

document.getElementById("toggleButton").addEventListener("click", function() {
    isFirstClick = !isFirstClick; 
});

function changeTextStyle(font) {
    document.getElementById("clock1").style.fontFamily = font;
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

updateTime();
setInterval(updateTime, 1000);
