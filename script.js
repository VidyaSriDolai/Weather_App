
const API_KEY = "556f88ad8c224116a2d181228261306";

async function getWeather() {

const city =
document.getElementById("cityInput").value;

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

try {

const response = await fetch(url);
const data = await response.json();

document.getElementById("city").innerHTML =
data.name;

document.getElementById("temperature").innerHTML =
Math.round(data.main.temp) + "°C";

document.getElementById("description").innerHTML =
data.weather[0].description;

document.getElementById("humidity").innerHTML =
data.main.humidity + "%";

document.getElementById("wind").innerHTML =
data.wind.speed + " m/s";

document.getElementById("pressure").innerHTML =
data.main.pressure + " hPa";

document.getElementById("visibility").innerHTML =
(data.visibility/1000) + " km";

createChart();

}
catch(error){

alert("City not found");

}
}

function createChart(){

const ctx =
document.getElementById("tempChart");

new Chart(ctx,{
type:'line',
data:{
labels:['6AM','9AM','12PM','3PM','6PM','9PM'],
datasets:[{
label:'Temperature',
data:[24,26,29,31,28,25],
borderWidth:3
}]
}
});

}
