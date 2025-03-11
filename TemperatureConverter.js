const fahrenheitConvert = document.getElementById("fahrenheitConvert");
const celsiusConvert = document.getElementById("celsiusConvert");
const displayResult = document.getElementById("results");

let convertedTemperature;

function converter(){
    const givenTemperature = Number(document.getElementById("givenTemperature").value);

    if(isNaN(givenTemperature)) convertedTemperature = "Please give a number!!";
    
    else{
        if(fahrenheitConvert.checked) convertedTemperature = (givenTemperature*9/5) + 32+"ºF";
        else if(celsiusConvert.checked) convertedTemperature = (givenTemperature-32) * 5/9+"ºC";
        else convertedTemperature = "Select an option!"
    }
    displayResult.textContent = convertedTemperature;
}
