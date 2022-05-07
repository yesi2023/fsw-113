// import the convertTemp.js and getDaylight.js scripts with their default export

import convection from "./convertTemp.js";
import dayOrNight from "./getDayight.js";

// declare any variables needed

let data, townName;
const temperature = document.querySelector("#tempData");
const humidity = document.querySelector("#humidData");
const conditions = document.querySelector("#conditionsData");

// create an event listener for the click of the goBttn that calls a function to fetch the weather data

document.querySelector("#goBttn").addEventListener("click", () => {
  townName = document.getElementById("city").value;
  queryAPI(townName);
});

// create a function that calls the function that queries the api
// and then creates promises that will call a function to write the weather data to the HTML page

function queryAPI(city) {
  fetchData(city)
    .then(function (data) {
      toDetails(data);
    })
    .catch(function (error) {
      console.warn(error);
    });
}

// use an asynchronous call to fetches the current weather for the specified city, awaits it,
// and returns the resulting data

const fetchData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=079767aa56696f9d8b115f42ab050b45`
  );
  data = await response.json();
  return data;
};

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

function toDetails(data) {
  temperature.innerText = convection(data.main.temp, data);
  humidity.innerText = `${data.main.humidity}%`;
  conditions.innerText = data.weather[0].main;
  document.querySelector(".weatherWrapper").style.backgroundColor =
    dayOrNight(data);
}
