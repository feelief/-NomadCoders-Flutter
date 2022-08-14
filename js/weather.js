const API_KEY = "a56e35d8001ce1fea61019d4fd5b4362"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const location = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        location.innerText = `location: ${data.name}`;
        weather.innerText = `weather: ${data.weather[0].main} / ${data.main.temp}°`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);