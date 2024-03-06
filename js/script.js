
let celciusInput = document.getElementById("celcius");
let fahrenheitInput = document.getElementById("fahrenheit");
let kelvinInput = document.getElementById("kelvin");

document.addEventListener("input", function (e) {
  let value = e.target.value;

  if (e.target["id"] === "celcius") {
    fahrenheitInput.value = value * 1.8 + 32;
    kelvinInput.value = value + 273.15;
  } else if (e.target["id"] === "fahrenheit") {
    celciusInput.value = (value - 32) / 1.8;
    kelvinInput.value = (value - 32) / 1.8 + 273.15;
  } else if (e.target["id"] === "kelvin") {
    celciusInput.value = value - 273.15;
    fahrenheitInput.value = ( - 273.15) * 1.8 + 32;
  }
  console.log();
});
