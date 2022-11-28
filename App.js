const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("numberInput");
const meterToFeet = document.getElementById("meterToFeet");
const feetToMeter = document.getElementById("feetToMeter");
const literToGallon = document.getElementById("literToGallon");
const gallonToLiter = document.getElementById("gallonToLiter");
const kiloToPound = document.getElementById("kiloToPound");
const poundToKilo = document.getElementById("poundToKilo");
const celciusToFahrenheit = document.getElementById("celciusToFahrenheit");
const fahrenheitToCelcius = document.getElementById("fahrenheitToCelcius");

function convert() {
  let num = numberInput.value;
  let feet = Math.round(num * 3280.8399) / 1000;
  let meter = Math.round(num * 304.8) / 1000;
  let gallon = Math.round(num * 264) / 1000;
  let liter = Math.round(num * 3785.411784) / 1000;
  let pound = Math.round(num * 2204.62262) / 1000;
  let kilo = Math.round(num * 453.59237) / 1000;
  let fahrenheit = Math.round((num * 1.8 + 32) * 1000) / 1000;
  let celcius = Math.round((num - 32) * 555.6) / 1000;

  meterToFeet.innerHTML = `${num} meters = ${feet} feet`;
  feetToMeter.innerHTML = `${num} feet = ${meter} meters`;
  literToGallon.innerHTML = `${num} liters = ${gallon} gallons`;
  gallonToLiter.innerHTML = `${num} gallons = ${liter} liters`;
  kiloToPound.innerHTML = `${num} kilos = ${pound} pounds`;
  poundToKilo.innerHTML = `${num} pounds = ${kilo} kilos`;
  celciusToFahrenheit.innerHTML = `${num}° Celcius = ${fahrenheit}° Fahrenheit`;
  fahrenheitToCelcius.innerHTML = `${num}° Fahrenheit = ${celcius}° Celcius`;
}

convertBtn.addEventListener("click", convert);
