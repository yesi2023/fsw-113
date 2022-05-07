// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

export default function convection(kelvinTemp, myLocation) {
  if (myLocation.sys.country == "US") {
    return `${(((kelvinTemp - 273.15) * 9) / 5 + 32).toFixed(0)}F`;
  } else {
    return `${(kelvinTemp - 273.15).toFixed(0)}C`;
  }
}
