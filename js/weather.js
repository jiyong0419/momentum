const API_KEY = "c8f9dab946ccd5055b646b937d8daa7e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = responseJson.name;
      if (responseJson.weather[0].main === "Clear") {
        weather.innerText = "🌞";
        city.style.color = "#F6E960";
      } else if (responseJson.weather[0].main === "Clouds") {
        weather.innerText = "☁";
        city.style.color = "#89A2AB";
      } else if (responseJson.weather[0].main === "Rain") {
        weather.innerText = "☔";
        city.style.color = "#06B1E0";
      } else if (responseJson.weather[0].main === "Snow") {
        weather.innerText = "☃";
        city.style.color = "#E3FFFF";
      }
    });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
