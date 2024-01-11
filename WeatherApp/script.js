const apiKey = "de7bb6aae46f99dd2b04b4f694811cf6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  // handling the error response if city not found
  if (response.status == 404) {
    document.querySelector(".error").classList.remove("hidden");
    document.querySelector(".weatherDetails").classList.add("hidden")
} else {
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "&degc";
    document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    // conditon to check weather and update the weather image
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./duzzel.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./clear.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./rain.png";
    } else if (data.weather[0].main == "Fog") {
      weatherIcon.src =
        "https://cdn3.iconfinder.com/data/icons/picons-weather/57/32_fog_cloud-512.png";
    }
    document.querySelector(".weatherDetails").classList.remove("hidden");
    document.querySelector(".error").classList.add("hidden"); 

  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
