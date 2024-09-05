const myTextBox = document.getElementById("myTextBox")
const celciusToFahrenheit = document.getElementById("celciusToFahrenheit")
const celciusToKelvin = document.getElementById("celciusToKelvin")
const kelvinToFahrenheit = document.getElementById("kelvinToFahrenheit")
const kelvinToCelcius = document.getElementById("kelvinToCelcius")
const fahrenheitToCelcius = document.getElementById("fahrenheitToCelcius")
const fahrenheitToKelvin = document.getElementById("fahrenheitToKelvin")
const myResult = document.getElementById("myResult")
let temp;

function convert() {

    if (celciusToFahrenheit.checked) {
        temp = Number(myTextBox.value);
        temp = temp * 9 / 5 + 32;
        myResult.textContent = temp.toFixed(1) + "°F";
    }
    else if (celciusToKelvin.checked) { 
        temp = Number(myTextBox.value);
        temp = temp + 273.15;
        myResult.textContent = temp.toFixed(1) + "°K";
    }
    else if (kelvinToFahrenheit.checked) { 
        temp = Number(myTextBox.value);
        temp = (temp - 273.15) * 9 / 5 + 32;
        myResult.textContent = temp.toFixed(1) + "°F";
    }
    else if (kelvinToCelcius.checked) { 
        temp = Number(myTextBox.value);
        temp = temp - 273.15;
        myResult.textContent = temp.toFixed(1) + "°C";
    }
    else if (fahrenheitToCelcius.checked) { 
        temp = Number(myTextBox.value);
        temp = (temp - 32) * 5 / 9;
        myResult.textContent = temp.toFixed(1) + "°C";
    }
    else if (fahrenheitToKelvin.checked) { 
        temp = Number(myTextBox.value);
        temp = (temp - 32) * 5 / 9 + 273.15;
        myResult.textContent = temp.toFixed(1) + "°K";
    }
    else {
        myResult.textContent = "Please Select The Option!!"
    }
}
