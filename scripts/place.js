const wind = document.querySelector("#windChill");
let temp = document.getElementById("degrees");
const speed = document.querySelector("#windSpeed");
let realTemp = parseFloat(temp.textContent);
const realSpeed = parseFloat(speed.textContent);
function calculateWindChill(temperature, windSpeed) {
    const total = 13.12 + 0.6215 * temperature + (0.3965 * temperature - 11.37) * windSpeed ** 0.16;

    return total;
}
if (realTemp <= 10 && realSpeed > 4.8) {
    wind.innerHTML = calculateWindChill(realTemp, realSpeed).toFixed(2) + " °C";
}
else {
    wind.innerHTML = "N/A";
}