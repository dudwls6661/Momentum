
const API_KEY = "4320f94d3289a4ec475cf6a14032d4a5";




navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      const weatherIcon = document.createElement("img");
      weatherIcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weatherIcon.alt="icon";
      const weatherRow = document.querySelector("#weather li:first-child");
      weatherRow.appendChild(weatherIcon);
      const temp = document.querySelector("#weather li:first-child span");
      const city = document.querySelector("#weather li:last-child span");
      temp.innerText = `${Math.ceil(data.main.temp)}°C`;
      city.innerText = data.name;
    });
}
function onGeoErr() {
  alert("Cant' find you. No weather infomation for you.")
}



const weatherContainer = document.querySelector("#weather");
weatherContainer.addEventListener("click",goToKMA);

function goToKMA() {
  window.open(
    "https://www.weather.go.kr/","_blank"
  );
}